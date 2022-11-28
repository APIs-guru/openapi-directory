
__doc__ = """ SDK Documentation: https://docs.aws.amazon.com/iot1click/ - Amazon Web Services documentation"""
import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils




SERVERS = [
	"http://projects.iot1click.{region}.amazonaws.com",
	"https://projects.iot1click.{region}.amazonaws.com",
	"http://projects.iot1click.{region}.amazonaws.com.cn",
	"https://projects.iot1click.{region}.amazonaws.com.cn",
]


class SDK:
    r"""SDK Documentation: https://docs.aws.amazon.com/iot1click/ - Amazon Web Services documentation"""

    _client: requests.Session
    _security_client: requests.Session
    _security: shared.Security
    _server_url: str = SERVERS[0]
    _language: str = "python"
    _sdk_version: str = "0.0.1"
    _gen_version: str = "internal"

    def __init__(self) -> None:
        self._client = requests.Session()
        self._security_client = requests.Session()
        


    def config_server_url(self, server_url: str, params: dict[str, str]):
        if params is not None:
            self._server_url = utils.replace_parameters(server_url, params)
        else:
            self._server_url = server_url

        
    

    def config_client(self, client: requests.Session):
        self._client = client
        
        if self._security is not None:
            self._security_client = utils.configure_security_client(self._client, self._security)
        
    

    def config_security(self, security: shared.Security):
        self._security = security
        self._security_client = utils.configure_security_client(self._client, security)
        
    
    
    
    def associate_device_with_placement(self, request: operations.AssociateDeviceWithPlacementRequest) -> operations.AssociateDeviceWithPlacementResponse:
        r"""Associates a physical device with a placement.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/projects/{projectName}/placements/{placementName}/devices/{deviceTemplateName}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AssociateDeviceWithPlacementResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.associate_device_with_placement_response = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.internal_failure_exception = out
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.invalid_request_exception = out
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.resource_conflict_exception = out
        elif r.status_code == 483:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.resource_not_found_exception = out

        return res

    
    def create_placement(self, request: operations.CreatePlacementRequest) -> operations.CreatePlacementResponse:
        r"""Creates an empty placement.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/projects/{projectName}/placements", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreatePlacementResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.create_placement_response = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.internal_failure_exception = out
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.invalid_request_exception = out
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.resource_conflict_exception = out
        elif r.status_code == 483:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.resource_not_found_exception = out

        return res

    
    def create_project(self, request: operations.CreateProjectRequest) -> operations.CreateProjectResponse:
        r"""Creates an empty project with a placement template. A project contains zero or more placements that adhere to the placement template defined in the project.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/projects"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateProjectResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.create_project_response = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.internal_failure_exception = out
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.invalid_request_exception = out
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.resource_conflict_exception = out

        return res

    
    def delete_placement(self, request: operations.DeletePlacementRequest) -> operations.DeletePlacementResponse:
        r"""<p>Deletes a placement. To delete a placement, it must not have any devices associated with it.</p> <note> <p>When you delete a placement, all associated data becomes irretrievable.</p> </note>
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/projects/{projectName}/placements/{placementName}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._security_client
        
        r = client.request("DELETE", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DeletePlacementResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.delete_placement_response = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.internal_failure_exception = out
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.invalid_request_exception = out
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.resource_not_found_exception = out
        elif r.status_code == 483:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.too_many_requests_exception = out

        return res

    
    def delete_project(self, request: operations.DeleteProjectRequest) -> operations.DeleteProjectResponse:
        r"""<p>Deletes a project. To delete a project, it must not have any placements associated with it.</p> <note> <p>When you delete a project, all associated data becomes irretrievable.</p> </note>
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/projects/{projectName}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._security_client
        
        r = client.request("DELETE", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteProjectResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.delete_project_response = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.internal_failure_exception = out
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.invalid_request_exception = out
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.resource_not_found_exception = out
        elif r.status_code == 483:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.too_many_requests_exception = out

        return res

    
    def describe_placement(self, request: operations.DescribePlacementRequest) -> operations.DescribePlacementResponse:
        r"""Describes a placement in a project.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/projects/{projectName}/placements/{placementName}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._security_client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DescribePlacementResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DescribePlacementResponse])
                res.describe_placement_response = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.internal_failure_exception = out
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.invalid_request_exception = out
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.resource_not_found_exception = out

        return res

    
    def describe_project(self, request: operations.DescribeProjectRequest) -> operations.DescribeProjectResponse:
        r"""Returns an object describing a project.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/projects/{projectName}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._security_client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DescribeProjectResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DescribeProjectResponse])
                res.describe_project_response = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.internal_failure_exception = out
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.invalid_request_exception = out
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.resource_not_found_exception = out

        return res

    
    def disassociate_device_from_placement(self, request: operations.DisassociateDeviceFromPlacementRequest) -> operations.DisassociateDeviceFromPlacementResponse:
        r"""Removes a physical device from a placement.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/projects/{projectName}/placements/{placementName}/devices/{deviceTemplateName}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._security_client
        
        r = client.request("DELETE", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DisassociateDeviceFromPlacementResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.disassociate_device_from_placement_response = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.internal_failure_exception = out
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.invalid_request_exception = out
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.resource_not_found_exception = out
        elif r.status_code == 483:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.too_many_requests_exception = out

        return res

    
    def get_devices_in_placement(self, request: operations.GetDevicesInPlacementRequest) -> operations.GetDevicesInPlacementResponse:
        r"""Returns an object enumerating the devices in a placement.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/projects/{projectName}/placements/{placementName}/devices", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._security_client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDevicesInPlacementResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetDevicesInPlacementResponse])
                res.get_devices_in_placement_response = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.internal_failure_exception = out
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.invalid_request_exception = out
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.resource_not_found_exception = out

        return res

    
    def list_placements(self, request: operations.ListPlacementsRequest) -> operations.ListPlacementsResponse:
        r"""Lists the placement(s) of a project.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/projects/{projectName}/placements", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ListPlacementsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListPlacementsResponse])
                res.list_placements_response = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.internal_failure_exception = out
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.invalid_request_exception = out
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.resource_not_found_exception = out

        return res

    
    def list_projects(self, request: operations.ListProjectsRequest) -> operations.ListProjectsResponse:
        r"""Lists the AWS IoT 1-Click project(s) associated with your AWS account and region.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/projects"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ListProjectsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListProjectsResponse])
                res.list_projects_response = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.internal_failure_exception = out
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.invalid_request_exception = out

        return res

    
    def list_tags_for_resource(self, request: operations.ListTagsForResourceRequest) -> operations.ListTagsForResourceResponse:
        r"""Lists the tags (metadata key/value pairs) which you have assigned to the resource.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/tags/{resourceArn}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._security_client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ListTagsForResourceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListTagsForResourceResponse])
                res.list_tags_for_resource_response = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.internal_failure_exception = out
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.invalid_request_exception = out
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.resource_not_found_exception = out

        return res

    
    def tag_resource(self, request: operations.TagResourceRequest) -> operations.TagResourceResponse:
        r"""Creates or modifies tags for a resource. Tags are key/value pairs (metadata) that can be used to manage a resource. For more information, see <a href=\"https://aws.amazon.com/answers/account-management/aws-tagging-strategies/\">AWS Tagging Strategies</a>.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/tags/{resourceArn}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.TagResourceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.tag_resource_response = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.internal_failure_exception = out
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.invalid_request_exception = out
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.resource_not_found_exception = out

        return res

    
    def untag_resource(self, request: operations.UntagResourceRequest) -> operations.UntagResourceResponse:
        r"""Removes one or more tags (metadata key/value pairs) from a resource.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/tags/{resourceArn}#tagKeys", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("DELETE", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UntagResourceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.untag_resource_response = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.internal_failure_exception = out
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.invalid_request_exception = out
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.resource_not_found_exception = out

        return res

    
    def update_placement(self, request: operations.UpdatePlacementRequest) -> operations.UpdatePlacementResponse:
        r"""Updates a placement with the given attributes. To clear an attribute, pass an empty value (i.e., \"\").
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/projects/{projectName}/placements/{placementName}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdatePlacementResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_placement_response = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.internal_failure_exception = out
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.invalid_request_exception = out
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.resource_not_found_exception = out
        elif r.status_code == 483:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.too_many_requests_exception = out

        return res

    
    def update_project(self, request: operations.UpdateProjectRequest) -> operations.UpdateProjectResponse:
        r"""Updates a project associated with your AWS account and region. With the exception of device template names, you can pass just the values that need to be updated because the update request will change only the values that are provided. To clear a value, pass the empty string (i.e., <code>\"\"</code>).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/projects/{projectName}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateProjectResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_project_response = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.internal_failure_exception = out
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.invalid_request_exception = out
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.resource_not_found_exception = out
        elif r.status_code == 483:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.too_many_requests_exception = out

        return res

    