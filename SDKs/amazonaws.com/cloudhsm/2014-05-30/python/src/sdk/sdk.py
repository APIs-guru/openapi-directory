
__doc__ = """ SDK Documentation: https://docs.aws.amazon.com/cloudhsm/ - Amazon Web Services documentation"""
import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils




SERVERS = [
	"http://cloudhsm.{region}.amazonaws.com",
	"https://cloudhsm.{region}.amazonaws.com",
	"http://cloudhsm.{region}.amazonaws.com.cn",
	"https://cloudhsm.{region}.amazonaws.com.cn",
]


class SDK:
    r"""SDK Documentation: https://docs.aws.amazon.com/cloudhsm/ - Amazon Web Services documentation"""

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
        
    
    
    
    def add_tags_to_resource(self, request: operations.AddTagsToResourceRequest) -> operations.AddTagsToResourceResponse:
        r"""<p>This is documentation for <b>AWS CloudHSM Classic</b>. For more information, see <a href=\"http://aws.amazon.com/cloudhsm/faqs-classic/\">AWS CloudHSM Classic FAQs</a>, the <a href=\"https://docs.aws.amazon.com/cloudhsm/classic/userguide/\">AWS CloudHSM Classic User Guide</a>, and the <a href=\"https://docs.aws.amazon.com/cloudhsm/classic/APIReference/\">AWS CloudHSM Classic API Reference</a>.</p> <p> <b>For information about the current version of AWS CloudHSM</b>, see <a href=\"http://aws.amazon.com/cloudhsm/\">AWS CloudHSM</a>, the <a href=\"https://docs.aws.amazon.com/cloudhsm/latest/userguide/\">AWS CloudHSM User Guide</a>, and the <a href=\"https://docs.aws.amazon.com/cloudhsm/latest/APIReference/\">AWS CloudHSM API Reference</a>.</p> <p>Adds or overwrites one or more tags for the specified AWS CloudHSM resource.</p> <p>Each tag consists of a key and a value. Tag keys must be unique to each resource.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#X-Amz-Target=CloudHsmFrontendService.AddTagsToResource"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AddTagsToResourceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AddTagsToResourceResponse])
                res.add_tags_to_resource_response = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.cloud_hsm_service_exception = out
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.cloud_hsm_internal_exception = out
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.invalid_request_exception = out

        return res

    
    def create_hapg(self, request: operations.CreateHapgRequest) -> operations.CreateHapgResponse:
        r"""<p>This is documentation for <b>AWS CloudHSM Classic</b>. For more information, see <a href=\"http://aws.amazon.com/cloudhsm/faqs-classic/\">AWS CloudHSM Classic FAQs</a>, the <a href=\"https://docs.aws.amazon.com/cloudhsm/classic/userguide/\">AWS CloudHSM Classic User Guide</a>, and the <a href=\"https://docs.aws.amazon.com/cloudhsm/classic/APIReference/\">AWS CloudHSM Classic API Reference</a>.</p> <p> <b>For information about the current version of AWS CloudHSM</b>, see <a href=\"http://aws.amazon.com/cloudhsm/\">AWS CloudHSM</a>, the <a href=\"https://docs.aws.amazon.com/cloudhsm/latest/userguide/\">AWS CloudHSM User Guide</a>, and the <a href=\"https://docs.aws.amazon.com/cloudhsm/latest/APIReference/\">AWS CloudHSM API Reference</a>.</p> <p>Creates a high-availability partition group. A high-availability partition group is a group of partitions that spans multiple physical HSMs.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#X-Amz-Target=CloudHsmFrontendService.CreateHapg"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateHapgResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CreateHapgResponse])
                res.create_hapg_response = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.cloud_hsm_service_exception = out
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.cloud_hsm_internal_exception = out
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.invalid_request_exception = out

        return res

    
    def create_hsm(self, request: operations.CreateHsmRequest) -> operations.CreateHsmResponse:
        r"""<p>This is documentation for <b>AWS CloudHSM Classic</b>. For more information, see <a href=\"http://aws.amazon.com/cloudhsm/faqs-classic/\">AWS CloudHSM Classic FAQs</a>, the <a href=\"https://docs.aws.amazon.com/cloudhsm/classic/userguide/\">AWS CloudHSM Classic User Guide</a>, and the <a href=\"https://docs.aws.amazon.com/cloudhsm/classic/APIReference/\">AWS CloudHSM Classic API Reference</a>.</p> <p> <b>For information about the current version of AWS CloudHSM</b>, see <a href=\"http://aws.amazon.com/cloudhsm/\">AWS CloudHSM</a>, the <a href=\"https://docs.aws.amazon.com/cloudhsm/latest/userguide/\">AWS CloudHSM User Guide</a>, and the <a href=\"https://docs.aws.amazon.com/cloudhsm/latest/APIReference/\">AWS CloudHSM API Reference</a>.</p> <p>Creates an uninitialized HSM instance.</p> <p>There is an upfront fee charged for each HSM instance that you create with the <code>CreateHsm</code> operation. If you accidentally provision an HSM and want to request a refund, delete the instance using the <a>DeleteHsm</a> operation, go to the <a href=\"https://console.aws.amazon.com/support/home\">AWS Support Center</a>, create a new case, and select <b>Account and Billing Support</b>.</p> <important> <p>It can take up to 20 minutes to create and provision an HSM. You can monitor the status of the HSM with the <a>DescribeHsm</a> operation. The HSM is ready to be initialized when the status changes to <code>RUNNING</code>.</p> </important>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#X-Amz-Target=CloudHsmFrontendService.CreateHsm"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateHsmResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CreateHsmResponse])
                res.create_hsm_response = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.cloud_hsm_service_exception = out
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.cloud_hsm_internal_exception = out
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.invalid_request_exception = out

        return res

    
    def create_luna_client(self, request: operations.CreateLunaClientRequest) -> operations.CreateLunaClientResponse:
        r"""<p>This is documentation for <b>AWS CloudHSM Classic</b>. For more information, see <a href=\"http://aws.amazon.com/cloudhsm/faqs-classic/\">AWS CloudHSM Classic FAQs</a>, the <a href=\"https://docs.aws.amazon.com/cloudhsm/classic/userguide/\">AWS CloudHSM Classic User Guide</a>, and the <a href=\"https://docs.aws.amazon.com/cloudhsm/classic/APIReference/\">AWS CloudHSM Classic API Reference</a>.</p> <p> <b>For information about the current version of AWS CloudHSM</b>, see <a href=\"http://aws.amazon.com/cloudhsm/\">AWS CloudHSM</a>, the <a href=\"https://docs.aws.amazon.com/cloudhsm/latest/userguide/\">AWS CloudHSM User Guide</a>, and the <a href=\"https://docs.aws.amazon.com/cloudhsm/latest/APIReference/\">AWS CloudHSM API Reference</a>.</p> <p>Creates an HSM client.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#X-Amz-Target=CloudHsmFrontendService.CreateLunaClient"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateLunaClientResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CreateLunaClientResponse])
                res.create_luna_client_response = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.cloud_hsm_service_exception = out
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.cloud_hsm_internal_exception = out
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.invalid_request_exception = out

        return res

    
    def delete_hapg(self, request: operations.DeleteHapgRequest) -> operations.DeleteHapgResponse:
        r"""<p>This is documentation for <b>AWS CloudHSM Classic</b>. For more information, see <a href=\"http://aws.amazon.com/cloudhsm/faqs-classic/\">AWS CloudHSM Classic FAQs</a>, the <a href=\"https://docs.aws.amazon.com/cloudhsm/classic/userguide/\">AWS CloudHSM Classic User Guide</a>, and the <a href=\"https://docs.aws.amazon.com/cloudhsm/classic/APIReference/\">AWS CloudHSM Classic API Reference</a>.</p> <p> <b>For information about the current version of AWS CloudHSM</b>, see <a href=\"http://aws.amazon.com/cloudhsm/\">AWS CloudHSM</a>, the <a href=\"https://docs.aws.amazon.com/cloudhsm/latest/userguide/\">AWS CloudHSM User Guide</a>, and the <a href=\"https://docs.aws.amazon.com/cloudhsm/latest/APIReference/\">AWS CloudHSM API Reference</a>.</p> <p>Deletes a high-availability partition group.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#X-Amz-Target=CloudHsmFrontendService.DeleteHapg"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteHapgResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DeleteHapgResponse])
                res.delete_hapg_response = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.cloud_hsm_service_exception = out
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.cloud_hsm_internal_exception = out
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.invalid_request_exception = out

        return res

    
    def delete_hsm(self, request: operations.DeleteHsmRequest) -> operations.DeleteHsmResponse:
        r"""<p>This is documentation for <b>AWS CloudHSM Classic</b>. For more information, see <a href=\"http://aws.amazon.com/cloudhsm/faqs-classic/\">AWS CloudHSM Classic FAQs</a>, the <a href=\"https://docs.aws.amazon.com/cloudhsm/classic/userguide/\">AWS CloudHSM Classic User Guide</a>, and the <a href=\"https://docs.aws.amazon.com/cloudhsm/classic/APIReference/\">AWS CloudHSM Classic API Reference</a>.</p> <p> <b>For information about the current version of AWS CloudHSM</b>, see <a href=\"http://aws.amazon.com/cloudhsm/\">AWS CloudHSM</a>, the <a href=\"https://docs.aws.amazon.com/cloudhsm/latest/userguide/\">AWS CloudHSM User Guide</a>, and the <a href=\"https://docs.aws.amazon.com/cloudhsm/latest/APIReference/\">AWS CloudHSM API Reference</a>.</p> <p>Deletes an HSM. After completion, this operation cannot be undone and your key material cannot be recovered.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#X-Amz-Target=CloudHsmFrontendService.DeleteHsm"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteHsmResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DeleteHsmResponse])
                res.delete_hsm_response = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.cloud_hsm_service_exception = out
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.cloud_hsm_internal_exception = out
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.invalid_request_exception = out

        return res

    
    def delete_luna_client(self, request: operations.DeleteLunaClientRequest) -> operations.DeleteLunaClientResponse:
        r"""<p>This is documentation for <b>AWS CloudHSM Classic</b>. For more information, see <a href=\"http://aws.amazon.com/cloudhsm/faqs-classic/\">AWS CloudHSM Classic FAQs</a>, the <a href=\"https://docs.aws.amazon.com/cloudhsm/classic/userguide/\">AWS CloudHSM Classic User Guide</a>, and the <a href=\"https://docs.aws.amazon.com/cloudhsm/classic/APIReference/\">AWS CloudHSM Classic API Reference</a>.</p> <p> <b>For information about the current version of AWS CloudHSM</b>, see <a href=\"http://aws.amazon.com/cloudhsm/\">AWS CloudHSM</a>, the <a href=\"https://docs.aws.amazon.com/cloudhsm/latest/userguide/\">AWS CloudHSM User Guide</a>, and the <a href=\"https://docs.aws.amazon.com/cloudhsm/latest/APIReference/\">AWS CloudHSM API Reference</a>.</p> <p>Deletes a client.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#X-Amz-Target=CloudHsmFrontendService.DeleteLunaClient"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteLunaClientResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DeleteLunaClientResponse])
                res.delete_luna_client_response = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.cloud_hsm_service_exception = out
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.cloud_hsm_internal_exception = out
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.invalid_request_exception = out

        return res

    
    def describe_hapg(self, request: operations.DescribeHapgRequest) -> operations.DescribeHapgResponse:
        r"""<p>This is documentation for <b>AWS CloudHSM Classic</b>. For more information, see <a href=\"http://aws.amazon.com/cloudhsm/faqs-classic/\">AWS CloudHSM Classic FAQs</a>, the <a href=\"https://docs.aws.amazon.com/cloudhsm/classic/userguide/\">AWS CloudHSM Classic User Guide</a>, and the <a href=\"https://docs.aws.amazon.com/cloudhsm/classic/APIReference/\">AWS CloudHSM Classic API Reference</a>.</p> <p> <b>For information about the current version of AWS CloudHSM</b>, see <a href=\"http://aws.amazon.com/cloudhsm/\">AWS CloudHSM</a>, the <a href=\"https://docs.aws.amazon.com/cloudhsm/latest/userguide/\">AWS CloudHSM User Guide</a>, and the <a href=\"https://docs.aws.amazon.com/cloudhsm/latest/APIReference/\">AWS CloudHSM API Reference</a>.</p> <p>Retrieves information about a high-availability partition group.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#X-Amz-Target=CloudHsmFrontendService.DescribeHapg"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DescribeHapgResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DescribeHapgResponse])
                res.describe_hapg_response = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.cloud_hsm_service_exception = out
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.cloud_hsm_internal_exception = out
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.invalid_request_exception = out

        return res

    
    def describe_hsm(self, request: operations.DescribeHsmRequest) -> operations.DescribeHsmResponse:
        r"""<p>This is documentation for <b>AWS CloudHSM Classic</b>. For more information, see <a href=\"http://aws.amazon.com/cloudhsm/faqs-classic/\">AWS CloudHSM Classic FAQs</a>, the <a href=\"https://docs.aws.amazon.com/cloudhsm/classic/userguide/\">AWS CloudHSM Classic User Guide</a>, and the <a href=\"https://docs.aws.amazon.com/cloudhsm/classic/APIReference/\">AWS CloudHSM Classic API Reference</a>.</p> <p> <b>For information about the current version of AWS CloudHSM</b>, see <a href=\"http://aws.amazon.com/cloudhsm/\">AWS CloudHSM</a>, the <a href=\"https://docs.aws.amazon.com/cloudhsm/latest/userguide/\">AWS CloudHSM User Guide</a>, and the <a href=\"https://docs.aws.amazon.com/cloudhsm/latest/APIReference/\">AWS CloudHSM API Reference</a>.</p> <p>Retrieves information about an HSM. You can identify the HSM by its ARN or its serial number.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#X-Amz-Target=CloudHsmFrontendService.DescribeHsm"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DescribeHsmResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DescribeHsmResponse])
                res.describe_hsm_response = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.cloud_hsm_service_exception = out
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.cloud_hsm_internal_exception = out
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.invalid_request_exception = out

        return res

    
    def describe_luna_client(self, request: operations.DescribeLunaClientRequest) -> operations.DescribeLunaClientResponse:
        r"""<p>This is documentation for <b>AWS CloudHSM Classic</b>. For more information, see <a href=\"http://aws.amazon.com/cloudhsm/faqs-classic/\">AWS CloudHSM Classic FAQs</a>, the <a href=\"https://docs.aws.amazon.com/cloudhsm/classic/userguide/\">AWS CloudHSM Classic User Guide</a>, and the <a href=\"https://docs.aws.amazon.com/cloudhsm/classic/APIReference/\">AWS CloudHSM Classic API Reference</a>.</p> <p> <b>For information about the current version of AWS CloudHSM</b>, see <a href=\"http://aws.amazon.com/cloudhsm/\">AWS CloudHSM</a>, the <a href=\"https://docs.aws.amazon.com/cloudhsm/latest/userguide/\">AWS CloudHSM User Guide</a>, and the <a href=\"https://docs.aws.amazon.com/cloudhsm/latest/APIReference/\">AWS CloudHSM API Reference</a>.</p> <p>Retrieves information about an HSM client.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#X-Amz-Target=CloudHsmFrontendService.DescribeLunaClient"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DescribeLunaClientResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DescribeLunaClientResponse])
                res.describe_luna_client_response = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.cloud_hsm_service_exception = out
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.cloud_hsm_internal_exception = out
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.invalid_request_exception = out

        return res

    
    def get_config(self, request: operations.GetConfigRequest) -> operations.GetConfigResponse:
        r"""<p>This is documentation for <b>AWS CloudHSM Classic</b>. For more information, see <a href=\"http://aws.amazon.com/cloudhsm/faqs-classic/\">AWS CloudHSM Classic FAQs</a>, the <a href=\"https://docs.aws.amazon.com/cloudhsm/classic/userguide/\">AWS CloudHSM Classic User Guide</a>, and the <a href=\"https://docs.aws.amazon.com/cloudhsm/classic/APIReference/\">AWS CloudHSM Classic API Reference</a>.</p> <p> <b>For information about the current version of AWS CloudHSM</b>, see <a href=\"http://aws.amazon.com/cloudhsm/\">AWS CloudHSM</a>, the <a href=\"https://docs.aws.amazon.com/cloudhsm/latest/userguide/\">AWS CloudHSM User Guide</a>, and the <a href=\"https://docs.aws.amazon.com/cloudhsm/latest/APIReference/\">AWS CloudHSM API Reference</a>.</p> <p>Gets the configuration files necessary to connect to all high availability partition groups the client is associated with.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#X-Amz-Target=CloudHsmFrontendService.GetConfig"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetConfigResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetConfigResponse])
                res.get_config_response = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.cloud_hsm_service_exception = out
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.cloud_hsm_internal_exception = out
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.invalid_request_exception = out

        return res

    
    def list_available_zones(self, request: operations.ListAvailableZonesRequest) -> operations.ListAvailableZonesResponse:
        r"""<p>This is documentation for <b>AWS CloudHSM Classic</b>. For more information, see <a href=\"http://aws.amazon.com/cloudhsm/faqs-classic/\">AWS CloudHSM Classic FAQs</a>, the <a href=\"https://docs.aws.amazon.com/cloudhsm/classic/userguide/\">AWS CloudHSM Classic User Guide</a>, and the <a href=\"https://docs.aws.amazon.com/cloudhsm/classic/APIReference/\">AWS CloudHSM Classic API Reference</a>.</p> <p> <b>For information about the current version of AWS CloudHSM</b>, see <a href=\"http://aws.amazon.com/cloudhsm/\">AWS CloudHSM</a>, the <a href=\"https://docs.aws.amazon.com/cloudhsm/latest/userguide/\">AWS CloudHSM User Guide</a>, and the <a href=\"https://docs.aws.amazon.com/cloudhsm/latest/APIReference/\">AWS CloudHSM API Reference</a>.</p> <p>Lists the Availability Zones that have available AWS CloudHSM capacity.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#X-Amz-Target=CloudHsmFrontendService.ListAvailableZones"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ListAvailableZonesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListAvailableZonesResponse])
                res.list_available_zones_response = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.cloud_hsm_service_exception = out
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.cloud_hsm_internal_exception = out
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.invalid_request_exception = out

        return res

    
    def list_hapgs(self, request: operations.ListHapgsRequest) -> operations.ListHapgsResponse:
        r"""<p>This is documentation for <b>AWS CloudHSM Classic</b>. For more information, see <a href=\"http://aws.amazon.com/cloudhsm/faqs-classic/\">AWS CloudHSM Classic FAQs</a>, the <a href=\"https://docs.aws.amazon.com/cloudhsm/classic/userguide/\">AWS CloudHSM Classic User Guide</a>, and the <a href=\"https://docs.aws.amazon.com/cloudhsm/classic/APIReference/\">AWS CloudHSM Classic API Reference</a>.</p> <p> <b>For information about the current version of AWS CloudHSM</b>, see <a href=\"http://aws.amazon.com/cloudhsm/\">AWS CloudHSM</a>, the <a href=\"https://docs.aws.amazon.com/cloudhsm/latest/userguide/\">AWS CloudHSM User Guide</a>, and the <a href=\"https://docs.aws.amazon.com/cloudhsm/latest/APIReference/\">AWS CloudHSM API Reference</a>.</p> <p>Lists the high-availability partition groups for the account.</p> <p>This operation supports pagination with the use of the <code>NextToken</code> member. If more results are available, the <code>NextToken</code> member of the response contains a token that you pass in the next call to <code>ListHapgs</code> to retrieve the next set of items.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#X-Amz-Target=CloudHsmFrontendService.ListHapgs"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ListHapgsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListHapgsResponse])
                res.list_hapgs_response = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.cloud_hsm_service_exception = out
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.cloud_hsm_internal_exception = out
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.invalid_request_exception = out

        return res

    
    def list_hsms(self, request: operations.ListHsmsRequest) -> operations.ListHsmsResponse:
        r"""<p>This is documentation for <b>AWS CloudHSM Classic</b>. For more information, see <a href=\"http://aws.amazon.com/cloudhsm/faqs-classic/\">AWS CloudHSM Classic FAQs</a>, the <a href=\"https://docs.aws.amazon.com/cloudhsm/classic/userguide/\">AWS CloudHSM Classic User Guide</a>, and the <a href=\"https://docs.aws.amazon.com/cloudhsm/classic/APIReference/\">AWS CloudHSM Classic API Reference</a>.</p> <p> <b>For information about the current version of AWS CloudHSM</b>, see <a href=\"http://aws.amazon.com/cloudhsm/\">AWS CloudHSM</a>, the <a href=\"https://docs.aws.amazon.com/cloudhsm/latest/userguide/\">AWS CloudHSM User Guide</a>, and the <a href=\"https://docs.aws.amazon.com/cloudhsm/latest/APIReference/\">AWS CloudHSM API Reference</a>.</p> <p>Retrieves the identifiers of all of the HSMs provisioned for the current customer.</p> <p>This operation supports pagination with the use of the <code>NextToken</code> member. If more results are available, the <code>NextToken</code> member of the response contains a token that you pass in the next call to <code>ListHsms</code> to retrieve the next set of items.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#X-Amz-Target=CloudHsmFrontendService.ListHsms"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ListHsmsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListHsmsResponse])
                res.list_hsms_response = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.cloud_hsm_service_exception = out
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.cloud_hsm_internal_exception = out
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.invalid_request_exception = out

        return res

    
    def list_luna_clients(self, request: operations.ListLunaClientsRequest) -> operations.ListLunaClientsResponse:
        r"""<p>This is documentation for <b>AWS CloudHSM Classic</b>. For more information, see <a href=\"http://aws.amazon.com/cloudhsm/faqs-classic/\">AWS CloudHSM Classic FAQs</a>, the <a href=\"https://docs.aws.amazon.com/cloudhsm/classic/userguide/\">AWS CloudHSM Classic User Guide</a>, and the <a href=\"https://docs.aws.amazon.com/cloudhsm/classic/APIReference/\">AWS CloudHSM Classic API Reference</a>.</p> <p> <b>For information about the current version of AWS CloudHSM</b>, see <a href=\"http://aws.amazon.com/cloudhsm/\">AWS CloudHSM</a>, the <a href=\"https://docs.aws.amazon.com/cloudhsm/latest/userguide/\">AWS CloudHSM User Guide</a>, and the <a href=\"https://docs.aws.amazon.com/cloudhsm/latest/APIReference/\">AWS CloudHSM API Reference</a>.</p> <p>Lists all of the clients.</p> <p>This operation supports pagination with the use of the <code>NextToken</code> member. If more results are available, the <code>NextToken</code> member of the response contains a token that you pass in the next call to <code>ListLunaClients</code> to retrieve the next set of items.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#X-Amz-Target=CloudHsmFrontendService.ListLunaClients"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ListLunaClientsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListLunaClientsResponse])
                res.list_luna_clients_response = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.cloud_hsm_service_exception = out
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.cloud_hsm_internal_exception = out
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.invalid_request_exception = out

        return res

    
    def list_tags_for_resource(self, request: operations.ListTagsForResourceRequest) -> operations.ListTagsForResourceResponse:
        r"""<p>This is documentation for <b>AWS CloudHSM Classic</b>. For more information, see <a href=\"http://aws.amazon.com/cloudhsm/faqs-classic/\">AWS CloudHSM Classic FAQs</a>, the <a href=\"https://docs.aws.amazon.com/cloudhsm/classic/userguide/\">AWS CloudHSM Classic User Guide</a>, and the <a href=\"https://docs.aws.amazon.com/cloudhsm/classic/APIReference/\">AWS CloudHSM Classic API Reference</a>.</p> <p> <b>For information about the current version of AWS CloudHSM</b>, see <a href=\"http://aws.amazon.com/cloudhsm/\">AWS CloudHSM</a>, the <a href=\"https://docs.aws.amazon.com/cloudhsm/latest/userguide/\">AWS CloudHSM User Guide</a>, and the <a href=\"https://docs.aws.amazon.com/cloudhsm/latest/APIReference/\">AWS CloudHSM API Reference</a>.</p> <p>Returns a list of all tags for the specified AWS CloudHSM resource.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#X-Amz-Target=CloudHsmFrontendService.ListTagsForResource"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ListTagsForResourceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListTagsForResourceResponse])
                res.list_tags_for_resource_response = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.cloud_hsm_service_exception = out
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.cloud_hsm_internal_exception = out
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.invalid_request_exception = out

        return res

    
    def modify_hapg(self, request: operations.ModifyHapgRequest) -> operations.ModifyHapgResponse:
        r"""<p>This is documentation for <b>AWS CloudHSM Classic</b>. For more information, see <a href=\"http://aws.amazon.com/cloudhsm/faqs-classic/\">AWS CloudHSM Classic FAQs</a>, the <a href=\"https://docs.aws.amazon.com/cloudhsm/classic/userguide/\">AWS CloudHSM Classic User Guide</a>, and the <a href=\"https://docs.aws.amazon.com/cloudhsm/classic/APIReference/\">AWS CloudHSM Classic API Reference</a>.</p> <p> <b>For information about the current version of AWS CloudHSM</b>, see <a href=\"http://aws.amazon.com/cloudhsm/\">AWS CloudHSM</a>, the <a href=\"https://docs.aws.amazon.com/cloudhsm/latest/userguide/\">AWS CloudHSM User Guide</a>, and the <a href=\"https://docs.aws.amazon.com/cloudhsm/latest/APIReference/\">AWS CloudHSM API Reference</a>.</p> <p>Modifies an existing high-availability partition group.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#X-Amz-Target=CloudHsmFrontendService.ModifyHapg"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ModifyHapgResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ModifyHapgResponse])
                res.modify_hapg_response = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.cloud_hsm_service_exception = out
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.cloud_hsm_internal_exception = out
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.invalid_request_exception = out

        return res

    
    def modify_hsm(self, request: operations.ModifyHsmRequest) -> operations.ModifyHsmResponse:
        r"""<p>This is documentation for <b>AWS CloudHSM Classic</b>. For more information, see <a href=\"http://aws.amazon.com/cloudhsm/faqs-classic/\">AWS CloudHSM Classic FAQs</a>, the <a href=\"https://docs.aws.amazon.com/cloudhsm/classic/userguide/\">AWS CloudHSM Classic User Guide</a>, and the <a href=\"https://docs.aws.amazon.com/cloudhsm/classic/APIReference/\">AWS CloudHSM Classic API Reference</a>.</p> <p> <b>For information about the current version of AWS CloudHSM</b>, see <a href=\"http://aws.amazon.com/cloudhsm/\">AWS CloudHSM</a>, the <a href=\"https://docs.aws.amazon.com/cloudhsm/latest/userguide/\">AWS CloudHSM User Guide</a>, and the <a href=\"https://docs.aws.amazon.com/cloudhsm/latest/APIReference/\">AWS CloudHSM API Reference</a>.</p> <p>Modifies an HSM.</p> <important> <p>This operation can result in the HSM being offline for up to 15 minutes while the AWS CloudHSM service is reconfigured. If you are modifying a production HSM, you should ensure that your AWS CloudHSM service is configured for high availability, and consider executing this operation during a maintenance window.</p> </important>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#X-Amz-Target=CloudHsmFrontendService.ModifyHsm"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ModifyHsmResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ModifyHsmResponse])
                res.modify_hsm_response = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.cloud_hsm_service_exception = out
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.cloud_hsm_internal_exception = out
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.invalid_request_exception = out

        return res

    
    def modify_luna_client(self, request: operations.ModifyLunaClientRequest) -> operations.ModifyLunaClientResponse:
        r"""<p>This is documentation for <b>AWS CloudHSM Classic</b>. For more information, see <a href=\"http://aws.amazon.com/cloudhsm/faqs-classic/\">AWS CloudHSM Classic FAQs</a>, the <a href=\"https://docs.aws.amazon.com/cloudhsm/classic/userguide/\">AWS CloudHSM Classic User Guide</a>, and the <a href=\"https://docs.aws.amazon.com/cloudhsm/classic/APIReference/\">AWS CloudHSM Classic API Reference</a>.</p> <p> <b>For information about the current version of AWS CloudHSM</b>, see <a href=\"http://aws.amazon.com/cloudhsm/\">AWS CloudHSM</a>, the <a href=\"https://docs.aws.amazon.com/cloudhsm/latest/userguide/\">AWS CloudHSM User Guide</a>, and the <a href=\"https://docs.aws.amazon.com/cloudhsm/latest/APIReference/\">AWS CloudHSM API Reference</a>.</p> <p>Modifies the certificate used by the client.</p> <p>This action can potentially start a workflow to install the new certificate on the client's HSMs.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#X-Amz-Target=CloudHsmFrontendService.ModifyLunaClient"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ModifyLunaClientResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ModifyLunaClientResponse])
                res.modify_luna_client_response = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.cloud_hsm_service_exception = out

        return res

    
    def remove_tags_from_resource(self, request: operations.RemoveTagsFromResourceRequest) -> operations.RemoveTagsFromResourceResponse:
        r"""<p>This is documentation for <b>AWS CloudHSM Classic</b>. For more information, see <a href=\"http://aws.amazon.com/cloudhsm/faqs-classic/\">AWS CloudHSM Classic FAQs</a>, the <a href=\"https://docs.aws.amazon.com/cloudhsm/classic/userguide/\">AWS CloudHSM Classic User Guide</a>, and the <a href=\"https://docs.aws.amazon.com/cloudhsm/classic/APIReference/\">AWS CloudHSM Classic API Reference</a>.</p> <p> <b>For information about the current version of AWS CloudHSM</b>, see <a href=\"http://aws.amazon.com/cloudhsm/\">AWS CloudHSM</a>, the <a href=\"https://docs.aws.amazon.com/cloudhsm/latest/userguide/\">AWS CloudHSM User Guide</a>, and the <a href=\"https://docs.aws.amazon.com/cloudhsm/latest/APIReference/\">AWS CloudHSM API Reference</a>.</p> <p>Removes one or more tags from the specified AWS CloudHSM resource.</p> <p>To remove a tag, specify only the tag key to remove (not the value). To overwrite the value for an existing tag, use <a>AddTagsToResource</a>.</p>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#X-Amz-Target=CloudHsmFrontendService.RemoveTagsFromResource"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RemoveTagsFromResourceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.RemoveTagsFromResourceResponse])
                res.remove_tags_from_resource_response = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.cloud_hsm_service_exception = out
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.cloud_hsm_internal_exception = out
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.invalid_request_exception = out

        return res

    