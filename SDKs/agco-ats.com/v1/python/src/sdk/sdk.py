

import requests
from typing import Any,List,Optional
from sdk.models import shared, operations
from . import utils




SERVERS = [
	"https://secure.agco-ats.com",
]


class SDK:
    

    _client: requests.Session
    _security_client: requests.Session
    
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
        
    
    
    
    def activities_delete_activity(self, request: operations.ActivitiesDeleteActivityRequest) -> operations.ActivitiesDeleteActivityResponse:
        r"""Mark the delete flag for the Activity
        Deletes an Activity. When successful, the response is empty.  If unsuccessful, an appropriate
                    ApiError is returned.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v2/activities/{activityID}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ActivitiesDeleteActivityResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def activities_get_activities(self, request: operations.ActivitiesGetActivitiesRequest) -> operations.ActivitiesGetActivitiesResponse:
        r"""Get Activities
        Gets a collection of Activities. When successful, the response is a PagedResponse of Activities.  
                    If unsuccessful, an appropriate ApiError is returned.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/v2/activities"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ActivitiesGetActivitiesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIPagedResponseBuildSystemSharedDtoActivity])
                res.api_paged_response_build_system_shared_dto_activity_ = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIPagedResponseBuildSystemSharedDtoActivity])
                res.api_paged_response_build_system_shared_dto_activity_ = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out

        return res

    
    def activities_get_activity(self, request: operations.ActivitiesGetActivityRequest) -> operations.ActivitiesGetActivityResponse:
        r"""Get an Activity by ID
        Gets an Activity by ID. When successful, the response is the requested Activity.  If unsuccessful,
                    an appropriate ApiError is returned.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v2/activities/{activityID}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ActivitiesGetActivityResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BuildSystemSharedDtoActivity])
                res.build_system_shared_dto_activity = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BuildSystemSharedDtoActivity])
                res.build_system_shared_dto_activity = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        else:
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out

        return res

    
    def activities_post_activity(self, request: operations.ActivitiesPostActivityRequest) -> operations.ActivitiesPostActivityResponse:
        r"""Create an Activity
        Creates an Activity.  The body of the POST is the Activity to create.  The ActivityID will be assigned
                    on creation of the Activity.  When successful, the response is the ActivityID.  If unsuccessful, an 
                    appropriate ApiError is returned.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/v2/activities"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ActivitiesPostActivityResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[int])
                res.activities_post_activity_200_application_json_int32_integer = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[int])
                res.activities_post_activity_200_text_json_int32_integer = out
        else:
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out

        return res

    
    def activities_put_activity(self, request: operations.ActivitiesPutActivityRequest) -> operations.ActivitiesPutActivityResponse:
        r"""Update an Activity
        Updates an Activity.  The body of the PUT is the updated Activity.  When successful, the response is empty.
                    If unsuccessful, an appropriate ApiError is returned.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v2/activities/{activityID}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ActivitiesPutActivityResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def activity_runs_get_activity_run(self, request: operations.ActivityRunsGetActivityRunRequest) -> operations.ActivityRunsGetActivityRunResponse:
        r"""Get an ActivityRun by ID
        Gets an ActivityRun by ID. When successful, the response is the requested ActivityRun.  If unsuccessful,
                    an appropriate ApiError is returned.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v2/activityRuns/{activityRunID}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ActivityRunsGetActivityRunResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BuildSystemSharedDtoActivityRun])
                res.build_system_shared_dto_activity_run = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BuildSystemSharedDtoActivityRun])
                res.build_system_shared_dto_activity_run = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        else:
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out

        return res

    
    def activity_runs_get_activity_run_status(self, request: operations.ActivityRunsGetActivityRunStatusRequest) -> operations.ActivityRunsGetActivityRunStatusResponse:
        r"""Get the ActivityRunStatus of an ActivityRun
        Gets the ActivityRunStatus of an ActivityRun.  When successful, the response is the requested ActivityRunStatus.
                    If unsuccessful, an appropriate ApiError is returned.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v2/activityRuns/{activityRunID}/status", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ActivityRunsGetActivityRunStatusResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BuildSystemSharedDtoActivityRunStatus])
                res.build_system_shared_dto_activity_run_status = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BuildSystemSharedDtoActivityRunStatus])
                res.build_system_shared_dto_activity_run_status = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        else:
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out

        return res

    
    def activity_runs_get_activity_runs(self, request: operations.ActivityRunsGetActivityRunsRequest) -> operations.ActivityRunsGetActivityRunsResponse:
        r"""Get ActivityRuns
        Gets a collection of ActivityRuns. When successful, the response is a PagedResponse of ActivityRuns.  
                    If unsuccessful, an appropriate ApiError is returned.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/v2/activityRuns"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ActivityRunsGetActivityRunsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIPagedResponseBuildSystemSharedDtoActivityRun])
                res.api_paged_response_build_system_shared_dto_activity_run_ = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIPagedResponseBuildSystemSharedDtoActivityRun])
                res.api_paged_response_build_system_shared_dto_activity_run_ = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out

        return res

    
    def activity_runs_put_activity_run(self, request: operations.ActivityRunsPutActivityRunRequest) -> operations.ActivityRunsPutActivityRunResponse:
        r"""Update an ActivityRun
        Updates the ActivityRunStatus of an ActivityRun.  The body of the PUT is the updated ActivityRunStatus.
                    When successful, the response is empty.  If unsuccessful, an appropriate ApiError is returned.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v2/activityRuns/{activityRunID}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ActivityRunsPutActivityRunResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def activity_runs_put_activity_run_status(self, request: operations.ActivityRunsPutActivityRunStatusRequest) -> operations.ActivityRunsPutActivityRunStatusResponse:
        r"""Update the ActivityRunStatus of an ActivityRun
        Updates the ActivityRunStatus of an ActivityRun.  The body of the PUT is the updated ActivityRunStatus.
                    When successful, the response is empty.  If unsuccessful, an appropriate ApiError is returned.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v2/activityRuns/{activityRunID}/status", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ActivityRunsPutActivityRunStatusResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def aftermarket_services_get_certs(self) -> operations.AftermarketServicesGetCertsResponse:
        r"""No Documentation Found.
        No Documentation Found.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/v2/AftermarketServices/Certificates"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.AftermarketServicesGetCertsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.system_object = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.system_object = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        else:
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out

        return res

    
    def aftermarket_services_get_connection_status(self) -> operations.AftermarketServicesGetConnectionStatusResponse:
        r"""Check whether there is connectivity to AGCO Power Web Services
        No Documentation Found.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/v2/AftermarketServices/Hello"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.AftermarketServicesGetConnectionStatusResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[bool])
                res.aftermarket_services_get_connection_status_200_application_json_boolean = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[bool])
                res.aftermarket_services_get_connection_status_200_text_json_boolean = out
        else:
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out

        return res

    
    def aftermarket_services_get_engine_iqa_codes(self, request: operations.AftermarketServicesGetEngineIqaCodesRequest) -> operations.AftermarketServicesGetEngineIqaCodesResponse:
        r"""Get injector codes given engine.
        No Documentation Found.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v2/AftermarketServices/Engines/{serialNumber}/IQACodes", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AftermarketServicesGetEngineIqaCodesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[str]])
                res.aftermarket_services_get_engine_iqa_codes_200_application_json_strings = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[str]])
                res.aftermarket_services_get_engine_iqa_codes_200_text_json_strings = out
        else:
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out

        return res

    
    def aftermarket_services_get_production_data(self, request: operations.AftermarketServicesGetProductionDataRequest) -> operations.AftermarketServicesGetProductionDataResponse:
        r"""Get production calibration data for given engine.
        No Documentation Found.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v2/AftermarketServices/Engines/{serialNumber}/ProductionData", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AftermarketServicesGetProductionDataResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.AgcoPowerServicesModelsProductionData]])
                res.agco_power_services_models_production_data = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.AgcoPowerServicesModelsProductionData]])
                res.agco_power_services_models_production_data = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        else:
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out

        return res

    
    def aftermarket_services_get_user_status(self, request: operations.AftermarketServicesGetUserStatusRequest) -> operations.AftermarketServicesGetUserStatusResponse:
        r"""Retrieve the status of an EDT Kit Registration with AGCO Power Web Services
        No Documentation Found.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/v2/AftermarketServices/UserStatuses"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AftermarketServicesGetUserStatusResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AgcoPowerServicesModelsUserStatus])
                res.agco_power_services_models_user_status = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AgcoPowerServicesModelsUserStatus])
                res.agco_power_services_models_user_status = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        else:
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out

        return res

    
    def aftermarket_services_put_ecu(self, request: operations.AftermarketServicesPutEcuRequest) -> operations.AftermarketServicesPutEcuResponse:
        r"""Activate or Deactivate an ECU, or Report an ECU as Damaged.
        No Documentation Found.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v2/AftermarketServices/ECUs/{serialNumber}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AftermarketServicesPutEcuResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AgcoPowerServicesModelsEcu])
                res.agco_power_services_models_ecu = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AgcoPowerServicesModelsEcu])
                res.agco_power_services_models_ecu = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        else:
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out

        return res

    
    def aftermarket_services_update_user_status(self, request: operations.AftermarketServicesUpdateUserStatusRequest) -> operations.AftermarketServicesUpdateUserStatusResponse:
        r"""Update the status of an EDT Kit Registration with AGCO Power Web Services
        No Documentation Found.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/v2/AftermarketServices/UserStatuses"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AftermarketServicesUpdateUserStatusResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[bool])
                res.aftermarket_services_update_user_status_200_application_json_boolean = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[bool])
                res.aftermarket_services_update_user_status_200_text_json_boolean = out
        else:
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out

        return res

    
    def agents_delete_agent(self, request: operations.AgentsDeleteAgentRequest) -> operations.AgentsDeleteAgentResponse:
        r"""Delete an Agent
        Deletes an Agent. When successful, the response is empty.  If unsuccessful, an appropriate
                    ApiError is returned.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v2/agents/{agentID}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.AgentsDeleteAgentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def agents_get_agent_activity_run(self, request: operations.AgentsGetAgentActivityRunRequest) -> operations.AgentsGetAgentActivityRunResponse:
        r"""Get an Agent's ActivityRun
        Gets the activity run assigned to an agent.  When successful, the response is the ActivityRun
                    assigned to the Agent.  If unsuccessful, an appropriate ApiError is returned.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v2/agents/{agentID}/ActivityRun", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.AgentsGetAgentActivityRunResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BuildSystemSharedDtoActivityRun])
                res.build_system_shared_dto_activity_run = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BuildSystemSharedDtoActivityRun])
                res.build_system_shared_dto_activity_run = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        else:
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out

        return res

    
    def agents_get_agent_async(self, request: operations.AgentsGetAgentAsyncRequest) -> operations.AgentsGetAgentAsyncResponse:
        r"""Get Agent
        Gets an Agent by ID. When successful, the response is the requested Agent.  If unsuccessful,
                    an appropriate ApiError is returned.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v2/agents/{agentID}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.AgentsGetAgentAsyncResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BuildSystemSharedDtoAgent])
                res.build_system_shared_dto_agent = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BuildSystemSharedDtoAgent])
                res.build_system_shared_dto_agent = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        else:
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out

        return res

    
    def agents_get_agents(self, request: operations.AgentsGetAgentsRequest) -> operations.AgentsGetAgentsResponse:
        r"""Get Agents
        Gets a collection of Agents. When successful, the response is a PagedResponse of Agents.  
                    If unsuccessful, an appropriate ApiError is returned.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/v2/agents"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AgentsGetAgentsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIPagedResponseBuildSystemSharedDtoAgent])
                res.api_paged_response_build_system_shared_dto_agent_ = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIPagedResponseBuildSystemSharedDtoAgent])
                res.api_paged_response_build_system_shared_dto_agent_ = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out

        return res

    
    def agents_get_current_agent_activity_run(self) -> operations.AgentsGetCurrentAgentActivityRunResponse:
        r"""Get the ActivityRun of Agent associated with the current user
        Gets the activity run assigned to an agent.  When successful, the response is the ActivityRun
                    assigned to the Agent.  If unsuccessful, an appropriate ApiError is returned.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/v2/agents/Current/ActivityRun"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.AgentsGetCurrentAgentActivityRunResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BuildSystemSharedDtoActivityRun])
                res.build_system_shared_dto_activity_run = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BuildSystemSharedDtoActivityRun])
                res.build_system_shared_dto_activity_run = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        else:
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out

        return res

    
    def agents_get_current_agent_async(self) -> operations.AgentsGetCurrentAgentAsyncResponse:
        r"""Get Agent associated with the current user
        Gets the Agent associated with the current user. When successful, the response is the requested Agent.  If unsuccessful,
                    an appropriate ApiError is returned.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/v2/agents/Current"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.AgentsGetCurrentAgentAsyncResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BuildSystemSharedDtoAgent])
                res.build_system_shared_dto_agent = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BuildSystemSharedDtoAgent])
                res.build_system_shared_dto_agent = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        else:
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out

        return res

    
    def agents_post_agent(self, request: operations.AgentsPostAgentRequest) -> operations.AgentsPostAgentResponse:
        r"""Create an Agent
        Creates an Agent.  The body of the POST is the Agent to create.  The AgentID will be assigned
                    on creation of the Agent.  When successful, the response is the AgentID.  If unsuccessful, an
                    appropriate ApiError is returned.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/v2/agents"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AgentsPostAgentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[int])
                res.agents_post_agent_200_application_json_int32_integer = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[int])
                res.agents_post_agent_200_text_json_int32_integer = out
        else:
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out

        return res

    
    def agents_put_agent(self, request: operations.AgentsPutAgentRequest) -> operations.AgentsPutAgentResponse:
        r"""Update an Agent
        Updates an Agent.  The body of the PUT is the updated Agent.  When successful, the response is empty.
                    If unsuccessful, an appropriate ApiError is returned.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v2/agents/{agentID}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AgentsPutAgentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def agents_put_agent_activity_run(self, request: operations.AgentsPutAgentActivityRunRequest) -> operations.AgentsPutAgentActivityRunResponse:
        r"""Update the ActivityRun assigned to the Agent.
        No Documentation Found.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v2/agents/{agentID}/ActivityRun", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AgentsPutAgentActivityRunResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def agents_put_agent_status(self, request: operations.AgentsPutAgentStatusRequest) -> operations.AgentsPutAgentStatusResponse:
        r"""Update an Agent
        Updates the status of an Agent.The body of the PUT is the updated Agent status.  When successful,
                    the response is empty.If unsuccessful, an appropriate ApiError is returned.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v2/agents/{agentID}/Status", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AgentsPutAgentStatusResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def authentication_default(self, request: operations.AuthenticationDefaultRequest) -> operations.AuthenticationDefaultResponse:
        r"""Authenticate a user.
        No Documentation Found.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/v2/Authentication"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AuthenticationDefaultResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAuthenticatedUser])
                res.api_models_authenticated_user = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAuthenticatedUser])
                res.api_models_authenticated_user = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def authentication_is_alive(self) -> operations.AuthenticationIsAliveResponse:
        r"""Acknowledges the connection to the API
        No Documentation Found.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/v2/Authentication/IsAlive"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.AuthenticationIsAliveResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def authentication_put_manage_tokens(self, request: operations.AuthenticationPutManageTokensRequest) -> operations.AuthenticationPutManageTokensResponse:
        r"""Manage API tokens.
        No Documentation Found.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v2/AuthenticatedUsers/{UserID}/Tokens", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AuthenticationPutManageTokensResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def authentication_request_password_reset(self, request: operations.AuthenticationRequestPasswordResetRequest) -> operations.AuthenticationRequestPasswordResetResponse:
        r"""Request a password reset.
        No Documentation Found.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/v2/Authentication/RequestPasswordReset"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AuthenticationRequestPasswordResetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def authentication_reset_pasword(self, request: operations.AuthenticationResetPaswordRequest) -> operations.AuthenticationResetPaswordResponse:
        r"""Reset a password
        No Documentation Found.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/v2/Authentication/ResetPasword"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AuthenticationResetPaswordResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def authorization_categories_add_user(self, request: operations.AuthorizationCategoriesAddUserRequest) -> operations.AuthorizationCategoriesAddUserResponse:
        r"""Add a category that a user can see.
        No Documentation Found.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v2/AuthorizationCategories/{id}/Users/{userID}", request.path_params)
        
        
        client = self._client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.AuthorizationCategoriesAddUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def authorization_categories_delete(self, request: operations.AuthorizationCategoriesDeleteRequest) -> operations.AuthorizationCategoriesDeleteResponse:
        r"""Remove an authorization category.
        No Documentation Found.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v2/AuthorizationCategories/{id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.AuthorizationCategoriesDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def authorization_categories_get(self, request: operations.AuthorizationCategoriesGetRequest) -> operations.AuthorizationCategoriesGetResponse:
        r"""Get authorization categories.
        No Documentation Found.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/v2/AuthorizationCategories"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AuthorizationCategoriesGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIIPagedResponseAuthorizationCodesSharedModelsCategory])
                res.api_i_paged_response_authorization_codes_shared_models_category_ = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIIPagedResponseAuthorizationCodesSharedModelsCategory])
                res.api_i_paged_response_authorization_codes_shared_models_category_ = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        else:
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out

        return res

    
    def authorization_categories_get_users(self, request: operations.AuthorizationCategoriesGetUsersRequest) -> operations.AuthorizationCategoriesGetUsersResponse:
        r"""Returns a report of access that users have to Authorization Categories.
        No Documentation Found.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/v2/AuthorizationCategories/Users"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AuthorizationCategoriesGetUsersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIIPagedResponseAuthorizationCodesSharedModelsCategoryUserReport])
                res.api_i_paged_response_authorization_codes_shared_models_category_user_report_ = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIIPagedResponseAuthorizationCodesSharedModelsCategoryUserReport])
                res.api_i_paged_response_authorization_codes_shared_models_category_user_report_ = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        else:
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out

        return res

    
    def authorization_categories_post(self, request: operations.AuthorizationCategoriesPostRequest) -> operations.AuthorizationCategoriesPostResponse:
        r"""Add an authorization category.
        No Documentation Found.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/v2/AuthorizationCategories"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AuthorizationCategoriesPostResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.authorization_categories_post_200_application_json_string = r.content
            if utils.match_content_type(content_type, "application/xml"):
                res.authorization_categories_post_200_application_xml_string = r.content
            if utils.match_content_type(content_type, "text/json"):
                res.authorization_categories_post_200_text_json_string = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.authorization_categories_post_200_text_xml_string = r.content
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def authorization_categories_put(self, request: operations.AuthorizationCategoriesPutRequest) -> operations.AuthorizationCategoriesPutResponse:
        r"""Update an authorization category.
        No Documentation Found.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v2/AuthorizationCategories/{id}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AuthorizationCategoriesPutResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def authorization_categories_remove_user(self, request: operations.AuthorizationCategoriesRemoveUserRequest) -> operations.AuthorizationCategoriesRemoveUserResponse:
        r"""Deletes a category a user could see.
        No Documentation Found.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v2/AuthorizationCategories/{id}/Users/{userID}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.AuthorizationCategoriesRemoveUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def authorization_code_definitions_add_category_to_definition(self, request: operations.AuthorizationCodeDefinitionsAddCategoryToDefinitionRequest) -> operations.AuthorizationCodeDefinitionsAddCategoryToDefinitionResponse:
        r"""Add a category to an authorizationCodeDefintion.
        No Documentation Found.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v2/AuthorizationCodeDefinitions/{ID}/Categories/{categoryID}", request.path_params)
        
        
        client = self._client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.AuthorizationCodeDefinitionsAddCategoryToDefinitionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def authorization_code_definitions_delete_authorization_code_definition(self, request: operations.AuthorizationCodeDefinitionsDeleteAuthorizationCodeDefinitionRequest) -> operations.AuthorizationCodeDefinitionsDeleteAuthorizationCodeDefinitionResponse:
        r"""Disable an authorization code definition
        No Documentation Found.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v2/AuthorizationCodeDefinitions/{id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.AuthorizationCodeDefinitionsDeleteAuthorizationCodeDefinitionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def authorization_code_definitions_get_authorization_code_definition(self, request: operations.AuthorizationCodeDefinitionsGetAuthorizationCodeDefinitionRequest) -> operations.AuthorizationCodeDefinitionsGetAuthorizationCodeDefinitionResponse:
        r"""Get authorization code definitions.
        Additional searches: validationFields[Name]=true and dataFields[Name]=true. These can be used to search for authorization code definitions that have the specified data or validation fields.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/v2/AuthorizationCodeDefinitions"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AuthorizationCodeDefinitionsGetAuthorizationCodeDefinitionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIIPagedResponseAuthorizationCodesSharedModelsAuthorizationCodeDefinition])
                res.api_i_paged_response_authorization_codes_shared_models_authorization_code_definition_ = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIIPagedResponseAuthorizationCodesSharedModelsAuthorizationCodeDefinition])
                res.api_i_paged_response_authorization_codes_shared_models_authorization_code_definition_ = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        else:
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out

        return res

    
    def authorization_code_definitions_remove_category_from_definition(self, request: operations.AuthorizationCodeDefinitionsRemoveCategoryFromDefinitionRequest) -> operations.AuthorizationCodeDefinitionsRemoveCategoryFromDefinitionResponse:
        r"""Deletes the category from the authorization code definition.
        No Documentation Found.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v2/AuthorizationCodeDefinitions/{ID}/Categories/{categoryID}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.AuthorizationCodeDefinitionsRemoveCategoryFromDefinitionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def authorization_codes_delete_authorization_code(self, request: operations.AuthorizationCodesDeleteAuthorizationCodeRequest) -> operations.AuthorizationCodesDeleteAuthorizationCodeResponse:
        r"""Hide an authorization code.
        No Documentation Found.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v2/AuthorizationCodes/{id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.AuthorizationCodesDeleteAuthorizationCodeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def authorization_codes_get_authorization_code(self, request: operations.AuthorizationCodesGetAuthorizationCodeRequest) -> operations.AuthorizationCodesGetAuthorizationCodeResponse:
        r"""Get an authorization code by its ID.
        No Documentation Found.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v2/AuthorizationCodes/{id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.AuthorizationCodesGetAuthorizationCodeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AuthorizationCodesSharedModelsAuthorizationCode])
                res.authorization_codes_shared_models_authorization_code = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AuthorizationCodesSharedModelsAuthorizationCode])
                res.authorization_codes_shared_models_authorization_code = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        else:
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out

        return res

    
    def authorization_codes_get_authorization_codes(self, request: operations.AuthorizationCodesGetAuthorizationCodesRequest) -> operations.AuthorizationCodesGetAuthorizationCodesResponse:
        r"""Get authorization codes.
        Additional searches: validationParameters[Name]=Value and dataParameters[Name]=Value. These can be used to search for authorization codes that have been generated using specified values for data or validation parameters.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/v2/AuthorizationCodes"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AuthorizationCodesGetAuthorizationCodesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIIPagedResponseAuthorizationCodesSharedModelsAuthorizationCode])
                res.api_i_paged_response_authorization_codes_shared_models_authorization_code_ = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIIPagedResponseAuthorizationCodesSharedModelsAuthorizationCode])
                res.api_i_paged_response_authorization_codes_shared_models_authorization_code_ = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        else:
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out

        return res

    
    def authorization_codes_get_contact_information(self, request: operations.AuthorizationCodesGetContactInformationRequest) -> operations.AuthorizationCodesGetContactInformationResponse:
        r"""Get contact information for an authorization code.
        No Documentation Found.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v2/AuthorizationCodes/{id}/ContactInformation", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.AuthorizationCodesGetContactInformationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AuthorizationCodesSharedModelsAuthorizationContactInformation])
                res.authorization_codes_shared_models_authorization_contact_information = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AuthorizationCodesSharedModelsAuthorizationContactInformation])
                res.authorization_codes_shared_models_authorization_contact_information = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        else:
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out

        return res

    
    def authorization_codes_validate_authorization_code(self, request: operations.AuthorizationCodesValidateAuthorizationCodeRequest) -> operations.AuthorizationCodesValidateAuthorizationCodeResponse:
        r"""No Documentation Found.
        No Documentation Found.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v2/AuthorizationCodes/{id}/Validate", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.AuthorizationCodesValidateAuthorizationCodeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AuthorizationCodesSharedModelsCodeValidationModel])
                res.authorization_codes_shared_models_code_validation_model = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AuthorizationCodesSharedModelsCodeValidationModel])
                res.authorization_codes_shared_models_code_validation_model = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        else:
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out

        return res

    
    def authorization_contact_information_get(self, request: operations.AuthorizationContactInformationGetRequest) -> operations.AuthorizationContactInformationGetResponse:
        r"""Get contact information for authorization codes.
        No Documentation Found.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/v2/AuthorizationContactInformation"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AuthorizationContactInformationGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIIPagedResponseAuthorizationCodesSharedModelsAuthorizationContactInformation])
                res.api_i_paged_response_authorization_codes_shared_models_authorization_contact_information_ = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIIPagedResponseAuthorizationCodesSharedModelsAuthorizationContactInformation])
                res.api_i_paged_response_authorization_codes_shared_models_authorization_contact_information_ = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        else:
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out

        return res

    
    def authorization_contact_information_post(self, request: operations.AuthorizationContactInformationPostRequest) -> operations.AuthorizationContactInformationPostResponse:
        r"""Add contact information for authorization code.
        No Documentation Found.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/v2/AuthorizationContactInformation"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AuthorizationContactInformationPostResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[int])
                res.authorization_contact_information_post_200_application_json_int32_integer = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[int])
                res.authorization_contact_information_post_200_text_json_int32_integer = out
        else:
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out

        return res

    
    def brands_brands(self) -> operations.BrandsBrandsResponse:
        r"""Gets a list of Brands.
        No Documentation Found.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/v2/Brands"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.BrandsBrandsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[str]])
                res.brands_brands_200_application_json_strings = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[str]])
                res.brands_brands_200_text_json_strings = out
        else:
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out

        return res

    
    def bundles_delete_bundle(self, request: operations.BundlesDeleteBundleRequest) -> operations.BundlesDeleteBundleResponse:
        r"""Delete a Bundle.
        No Documentation Found.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v2/Bundles/{ID}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.BundlesDeleteBundleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def bundles_get_bundle(self, request: operations.BundlesGetBundleRequest) -> operations.BundlesGetBundleResponse:
        r"""Get a specific Bundle by ID.
        No Documentation Found.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v2/Bundles/{ID}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.BundlesGetBundleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UpdateSystemModelsBundle])
                res.update_system_models_bundle = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UpdateSystemModelsBundle])
                res.update_system_models_bundle = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        else:
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out

        return res

    
    def bundles_get_bundles(self, request: operations.BundlesGetBundlesRequest) -> operations.BundlesGetBundlesResponse:
        r"""Get the list of bundles.
        No Documentation Found.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/v2/Bundles"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.BundlesGetBundlesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIPagedResponseUpdateSystemModelsBundle])
                res.api_paged_response_update_system_models_bundle_ = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIPagedResponseUpdateSystemModelsBundle])
                res.api_paged_response_update_system_models_bundle_ = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out

        return res

    
    def bundles_post_bundle(self, request: operations.BundlesPostBundleRequest) -> operations.BundlesPostBundleResponse:
        r"""Add a Bundle to the Update System.
        No Documentation Found.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/v2/Bundles"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.BundlesPostBundleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.bundles_post_bundle_200_application_json_string = r.content
            if utils.match_content_type(content_type, "application/xml"):
                res.bundles_post_bundle_200_application_xml_string = r.content
            if utils.match_content_type(content_type, "text/json"):
                res.bundles_post_bundle_200_text_json_string = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.bundles_post_bundle_200_text_xml_string = r.content
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def bundles_put_bundle(self, request: operations.BundlesPutBundleRequest) -> operations.BundlesPutBundleResponse:
        r"""Modify a Bundle in the Update System.
        No Documentation Found.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v2/Bundles/{ID}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.BundlesPutBundleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def clients_get(self, request: operations.ClientsGetRequest) -> operations.ClientsGetResponse:
        r"""Get a List of Clients in the Update System.
        No Documentation Found.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/v2/Clients"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ClientsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIPagedResponseUpdateSystemModelsClient])
                res.api_paged_response_update_system_models_client_ = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIPagedResponseUpdateSystemModelsClient])
                res.api_paged_response_update_system_models_client_ = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out

        return res

    
    def clients_get_available_subscriptions(self, request: operations.ClientsGetAvailableSubscriptionsRequest) -> operations.ClientsGetAvailableSubscriptionsResponse:
        r"""Get a Client's Available Update Group Subscriptions
        No Documentation Found.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v2/Clients/{ID}/AvailableUpdateGroupSubscriptions", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ClientsGetAvailableSubscriptionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIPagedResponseUpdateSystemModelsAvailableUpdateGroupSubscription])
                res.api_paged_response_update_system_models_available_update_group_subscription_ = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIPagedResponseUpdateSystemModelsAvailableUpdateGroupSubscription])
                res.api_paged_response_update_system_models_available_update_group_subscription_ = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out

        return res

    
    def clients_get_subscriptions(self, request: operations.ClientsGetSubscriptionsRequest) -> operations.ClientsGetSubscriptionsResponse:
        r"""Get a Client's Current Update Group Subscriptions
        No Documentation Found.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v2/Clients/{ID}/UpdateGroupSubscriptions", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ClientsGetSubscriptionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIPagedResponseUpdateSystemModelsUpdateGroupSubscription])
                res.api_paged_response_update_system_models_update_group_subscription_ = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIPagedResponseUpdateSystemModelsUpdateGroupSubscription])
                res.api_paged_response_update_system_models_update_group_subscription_ = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out

        return res

    
    def clients_put(self, request: operations.ClientsPutRequest) -> operations.ClientsPutResponse:
        r"""Update a Client.
        No Documentation Found.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v2/Clients/{ID}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ClientsPutResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def content_definitions_delete_content_definition(self, request: operations.ContentDefinitionsDeleteContentDefinitionRequest) -> operations.ContentDefinitionsDeleteContentDefinitionResponse:
        r"""Delete a ContentDefinition
        Deletes an ContentDefinition. When successful, the response is empty.  If unsuccessful, an appropriate
                    ApiError is returned.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v2/ContentDefinitions/{contentDefinitionID}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ContentDefinitionsDeleteContentDefinitionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def content_definitions_delete_content_definition_attribute(self, request: operations.ContentDefinitionsDeleteContentDefinitionAttributeRequest) -> operations.ContentDefinitionsDeleteContentDefinitionAttributeResponse:
        r"""Remove an Attribute from a ContentDefinition
        No Documentation Found.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v2/ContentDefinitionAttributes/{contentDefinitionAttributeID}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ContentDefinitionsDeleteContentDefinitionAttributeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def content_definitions_get_content_definition(self, request: operations.ContentDefinitionsGetContentDefinitionRequest) -> operations.ContentDefinitionsGetContentDefinitionResponse:
        r"""Get a ContentDefinition by ID
        Gets a ContentDefinition by ID. When successful, the response is the requested ContentDefinition.
                    If unsuccessful, an appropriate ApiError is returned.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v2/ContentDefinitions/{contentDefinitionID}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ContentDefinitionsGetContentDefinitionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ContentSubmissionSharedBusinessEntitiesContentDefinition])
                res.content_submission_shared_business_entities_content_definition = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ContentSubmissionSharedBusinessEntitiesContentDefinition])
                res.content_submission_shared_business_entities_content_definition = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        else:
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out

        return res

    
    def content_definitions_get_content_definition_attributes(self, request: operations.ContentDefinitionsGetContentDefinitionAttributesRequest) -> operations.ContentDefinitionsGetContentDefinitionAttributesResponse:
        r"""Get Attributes for a ContentDefinition
        No Documentation Found.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v2/ContentDefinitions/{contentDefinitionID}/Attributes", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ContentDefinitionsGetContentDefinitionAttributesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIPagedResponseContentSubmissionSharedBusinessEntitiesContentDefinitionAttribute])
                res.api_paged_response_content_submission_shared_business_entities_content_definition_attribute_ = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIPagedResponseContentSubmissionSharedBusinessEntitiesContentDefinitionAttribute])
                res.api_paged_response_content_submission_shared_business_entities_content_definition_attribute_ = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out

        return res

    
    def content_definitions_get_content_definitions(self, request: operations.ContentDefinitionsGetContentDefinitionsRequest) -> operations.ContentDefinitionsGetContentDefinitionsResponse:
        r"""Get ContentDefinitions
        Gets a collection of ContentDefinitions. When successful, the response is a PagedResponse of ContentDefinitions.
                    If unsuccessful, an appropriate ApiError is returned.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/v2/ContentDefinitions"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ContentDefinitionsGetContentDefinitionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIPagedResponseContentSubmissionSharedBusinessEntitiesContentDefinition])
                res.api_paged_response_content_submission_shared_business_entities_content_definition_ = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIPagedResponseContentSubmissionSharedBusinessEntitiesContentDefinition])
                res.api_paged_response_content_submission_shared_business_entities_content_definition_ = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out

        return res

    
    def content_definitions_post_content_definition_attribute(self, request: operations.ContentDefinitionsPostContentDefinitionAttributeRequest) -> operations.ContentDefinitionsPostContentDefinitionAttributeResponse:
        r"""Add an Attribute to a ContentDefinition
        No Documentation Found.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v2/ContentDefinitions/{contentDefinitionID}/Attributes", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ContentDefinitionsPostContentDefinitionAttributeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[int])
                res.content_definitions_post_content_definition_attribute_200_application_json_int32_integer = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[int])
                res.content_definitions_post_content_definition_attribute_200_text_json_int32_integer = out
        else:
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out

        return res

    
    def content_definitions_put_content_definition_attribute_async(self, request: operations.ContentDefinitionsPutContentDefinitionAttributeAsyncRequest) -> operations.ContentDefinitionsPutContentDefinitionAttributeAsyncResponse:
        r"""Update an Attribute for a ContentDefinition
        No Documentation Found.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v2/ContentDefinitionAttributes/{contentDefinitionAttributeID}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ContentDefinitionsPutContentDefinitionAttributeAsyncResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def content_release_delete_content_release_versionn(self, request: operations.ContentReleaseDeleteContentReleaseVersionnRequest) -> operations.ContentReleaseDeleteContentReleaseVersionnResponse:
        r"""Delete a ContentReleaseVersion
        Deletes an ContentReleaseVersion. When successful, the response is empty.  If unsuccessful, an appropriate
                    ApiError is returned.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v2/ContentReleases/{ContentReleaseId}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ContentReleaseDeleteContentReleaseVersionnResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def content_release_get_content_release_version(self, request: operations.ContentReleaseGetContentReleaseVersionRequest) -> operations.ContentReleaseGetContentReleaseVersionResponse:
        r"""Get ContentReleaseVersion
        Gets a collection of ContentReleaseVersion. When successful, the response is a PagedResponse of ContentReleaseVersion.
                    If unsuccessful, an appropriate ApiError is returned.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/v2/ContentReleases"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ContentReleaseGetContentReleaseVersionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIPagedResponseContentSubmissionSharedBusinessEntitiesContentReleaseVersion])
                res.api_paged_response_content_submission_shared_business_entities_content_release_version_ = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIPagedResponseContentSubmissionSharedBusinessEntitiesContentReleaseVersion])
                res.api_paged_response_content_submission_shared_business_entities_content_release_version_ = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out

        return res

    
    def content_release_post_content_release(self, request: operations.ContentReleasePostContentReleaseRequest) -> operations.ContentReleasePostContentReleaseResponse:
        r"""Create a ContentReleaseVersion
        Creates a ContentReleaseVersion.  The body of the POST is the ContentReleaseVersion to create.
                    The ContentReleaseId will be assigned on creation of the Job.  When successful, the response
                    is the contentReleaseId.  If unsuccessful, an appropriate ApiError is returned.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/v2/ContentReleases"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ContentReleasePostContentReleaseResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[int])
                res.content_release_post_content_release_200_application_json_int32_integer = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[int])
                res.content_release_post_content_release_200_text_json_int32_integer = out
        else:
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out

        return res

    
    def content_release_put_content_definition(self, request: operations.ContentReleasePutContentDefinitionRequest) -> operations.ContentReleasePutContentDefinitionResponse:
        r"""Update a ContentReleaseVersion
        Updates a ContentReleaseVersion.  The body of the PUT is the updated ContentReleaseVersion.  
                    When successful, the response is empty.  If unsuccessful, an appropriate ApiError is returned.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v2/ContentReleases/{ContentReleaseId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ContentReleasePutContentDefinitionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def content_submission_types_delete_content_submission_type(self, request: operations.ContentSubmissionTypesDeleteContentSubmissionTypeRequest) -> operations.ContentSubmissionTypesDeleteContentSubmissionTypeResponse:
        r"""Remove a Content Submission Type
        No Documentation Found.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v2/ContentSubmissionTypes/{id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ContentSubmissionTypesDeleteContentSubmissionTypeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def content_submission_types_get_content_submission_type(self, request: operations.ContentSubmissionTypesGetContentSubmissionTypeRequest) -> operations.ContentSubmissionTypesGetContentSubmissionTypeResponse:
        r"""Retrieves a Content Submission Type by its ID.
        No Documentation Found.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v2/ContentSubmissionTypes/{id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ContentSubmissionTypesGetContentSubmissionTypeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ContentSubmissionSharedBusinessEntitiesContentSubmissionType])
                res.content_submission_shared_business_entities_content_submission_type = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ContentSubmissionSharedBusinessEntitiesContentSubmissionType])
                res.content_submission_shared_business_entities_content_submission_type = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        else:
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out

        return res

    
    def content_submission_types_get_content_submission_types(self, request: operations.ContentSubmissionTypesGetContentSubmissionTypesRequest) -> operations.ContentSubmissionTypesGetContentSubmissionTypesResponse:
        r"""Returns available Content Submission Types.
        No Documentation Found.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/v2/ContentSubmissionTypes"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ContentSubmissionTypesGetContentSubmissionTypesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.ContentSubmissionSharedBusinessEntitiesContentSubmissionType]])
                res.content_submission_shared_business_entities_content_submission_types = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.ContentSubmissionSharedBusinessEntitiesContentSubmissionType]])
                res.content_submission_shared_business_entities_content_submission_types = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        else:
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out

        return res

    
    def content_submission_types_post_content_submission_type(self, request: operations.ContentSubmissionTypesPostContentSubmissionTypeRequest) -> operations.ContentSubmissionTypesPostContentSubmissionTypeResponse:
        r"""Add a Content Submission Type
        No Documentation Found.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/v2/ContentSubmissionTypes"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ContentSubmissionTypesPostContentSubmissionTypeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[int])
                res.content_submission_types_post_content_submission_type_200_application_json_int32_integer = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[int])
                res.content_submission_types_post_content_submission_type_200_text_json_int32_integer = out
        else:
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out

        return res

    
    def content_submission_types_put_content_submission_type(self, request: operations.ContentSubmissionTypesPutContentSubmissionTypeRequest) -> operations.ContentSubmissionTypesPutContentSubmissionTypeResponse:
        r"""Update a Content Submission Type
        No Documentation Found.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v2/ContentSubmissionTypes/{id}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ContentSubmissionTypesPutContentSubmissionTypeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def content_submissions_delete_content_submission(self, request: operations.ContentSubmissionsDeleteContentSubmissionRequest) -> operations.ContentSubmissionsDeleteContentSubmissionResponse:
        r"""Delete a ContentSubmission
        Deletes an ContentSubmission. When successful, the response is empty.  If unsuccessful, an appropriate
                    ApiError is returned.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v2/ContentSubmissions/{contentSubmissionID}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ContentSubmissionsDeleteContentSubmissionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def content_submissions_delete_content_submission_attribute(self, request: operations.ContentSubmissionsDeleteContentSubmissionAttributeRequest) -> operations.ContentSubmissionsDeleteContentSubmissionAttributeResponse:
        r"""Remove an Attribute from a ContentSubmission
        No Documentation Found.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v2/ContentSubmissionAttributes/{contentSubmissionAttributeID}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ContentSubmissionsDeleteContentSubmissionAttributeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def content_submissions_get_content_submission(self, request: operations.ContentSubmissionsGetContentSubmissionRequest) -> operations.ContentSubmissionsGetContentSubmissionResponse:
        r"""Get a ContentSubmission by ID
        Gets a ContentSubmission by ID. When successful, the response is the requested ContentSubmission.
                    If unsuccessful, an appropriate ApiError is returned.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v2/ContentSubmissions/{contentSubmissionID}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ContentSubmissionsGetContentSubmissionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ContentSubmissionSharedBusinessEntitiesContentSubmission])
                res.content_submission_shared_business_entities_content_submission = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ContentSubmissionSharedBusinessEntitiesContentSubmission])
                res.content_submission_shared_business_entities_content_submission = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        else:
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out

        return res

    
    def content_submissions_get_content_submission_attributes(self, request: operations.ContentSubmissionsGetContentSubmissionAttributesRequest) -> operations.ContentSubmissionsGetContentSubmissionAttributesResponse:
        r"""Get Attributes for a ContentSubmission
        No Documentation Found.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v2/ContentSubmissions/{contentSubmissionID}/Attributes", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ContentSubmissionsGetContentSubmissionAttributesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIPagedResponseContentSubmissionSharedBusinessEntitiesContentSubmissionAttribute])
                res.api_paged_response_content_submission_shared_business_entities_content_submission_attribute_ = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIPagedResponseContentSubmissionSharedBusinessEntitiesContentSubmissionAttribute])
                res.api_paged_response_content_submission_shared_business_entities_content_submission_attribute_ = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out

        return res

    
    def content_submissions_get_content_submissions(self, request: operations.ContentSubmissionsGetContentSubmissionsRequest) -> operations.ContentSubmissionsGetContentSubmissionsResponse:
        r"""Get ContentSubmissions
        Gets a collection of ContentSubmissions. When successful, the response is a PagedResponse of ContentSubmissions. Additional searches: attributes[Name]=Value. This can be used to search for submissions that have the specified values for attributes. Beginning and ending wildcard (*) supported for value.
                    If unsuccessful, an appropriate ApiError is returned.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/v2/ContentSubmissions"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ContentSubmissionsGetContentSubmissionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIPagedResponseContentSubmissionSharedBusinessEntitiesContentSubmission])
                res.api_paged_response_content_submission_shared_business_entities_content_submission_ = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIPagedResponseContentSubmissionSharedBusinessEntitiesContentSubmission])
                res.api_paged_response_content_submission_shared_business_entities_content_submission_ = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out

        return res

    
    def content_submissions_post_content_submission_attribute(self, request: operations.ContentSubmissionsPostContentSubmissionAttributeRequest) -> operations.ContentSubmissionsPostContentSubmissionAttributeResponse:
        r"""Add an Attribute to a ContentSubmission
        No Documentation Found.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v2/ContentSubmissions/{contentSubmissionID}/Attributes", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ContentSubmissionsPostContentSubmissionAttributeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[int])
                res.content_submissions_post_content_submission_attribute_200_application_json_int32_integer = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[int])
                res.content_submissions_post_content_submission_attribute_200_text_json_int32_integer = out
        else:
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out

        return res

    
    def content_submissions_put_content_submission_attribute_async(self, request: operations.ContentSubmissionsPutContentSubmissionAttributeAsyncRequest) -> operations.ContentSubmissionsPutContentSubmissionAttributeAsyncResponse:
        r"""Update an Attribute for a ContentSubmission
        No Documentation Found.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v2/ContentSubmissionAttributes/{contentSubmissionAttributeID}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ContentSubmissionsPutContentSubmissionAttributeAsyncResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def dealer_by_country_get_countries(self, request: operations.DealerByCountryGetCountriesRequest) -> operations.DealerByCountryGetCountriesResponse:
        r"""Get a total count of dealers per country
        No Documentation Found.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/v2/DealerByCountry"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DealerByCountryGetCountriesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIPagedResponseDealerDbModelsDealersPerCountry])
                res.api_paged_response_dealer_db_models_dealers_per_country_ = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIPagedResponseDealerDbModelsDealersPerCountry])
                res.api_paged_response_dealer_db_models_dealers_per_country_ = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out

        return res

    
    def dealers_get_dealerby_dealer_code(self, request: operations.DealersGetDealerbyDealerCodeRequest) -> operations.DealersGetDealerbyDealerCodeResponse:
        r"""Lookup a dealer using a dealer code.
        No Documentation Found.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v2/Dealers/{DealerCode}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DealersGetDealerbyDealerCodeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DealerDbModelsDealer])
                res.dealer_db_models_dealer = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DealerDbModelsDealer])
                res.dealer_db_models_dealer = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        else:
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out

        return res

    
    def dealers_get_dealers(self, request: operations.DealersGetDealersRequest) -> operations.DealersGetDealersResponse:
        r"""Get a list of dealers.
        No Documentation Found.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/v2/Dealers"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DealersGetDealersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIPagedResponseDealerDbModelsDealer])
                res.api_paged_response_dealer_db_models_dealer_ = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIPagedResponseDealerDbModelsDealer])
                res.api_paged_response_dealer_db_models_dealer_ = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out

        return res

    
    def files_delete_file(self, request: operations.FilesDeleteFileRequest) -> operations.FilesDeleteFileResponse:
        r"""Mark a file as 'Removed'. Disables download of the file and hides metadata from GET all method
        No Documentation Found.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v2/Files/{ID}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FilesDeleteFileResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def files_get_file(self, request: operations.FilesGetFileRequest) -> operations.FilesGetFileResponse:
        r"""Gets a file's metadata.
        No Documentation Found.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v2/Files/{ID}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FilesGetFileResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GlobalResourcesSharedModelsFileDownload])
                res.global_resources_shared_models_file_download = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GlobalResourcesSharedModelsFileDownload])
                res.global_resources_shared_models_file_download = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        else:
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out

        return res

    
    def files_get_file_contents(self, request: operations.FilesGetFileContentsRequest) -> operations.FilesGetFileContentsResponse:
        r"""Download the contents of a file. The current State of the File should be 'Available'.
        No Documentation Found.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v2/Files/{ID}/FileContents", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FilesGetFileContentsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.system_object = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.system_object = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        else:
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out

        return res

    
    def files_get_files(self, request: operations.FilesGetFilesRequest) -> operations.FilesGetFilesResponse:
        r"""Get a paged response of file metadata.
        No Documentation Found.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/v2/Files"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.FilesGetFilesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIIPagedResponseGlobalResourcesSharedModelsFileDownload])
                res.api_i_paged_response_global_resources_shared_models_file_download_ = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIIPagedResponseGlobalResourcesSharedModelsFileDownload])
                res.api_i_paged_response_global_resources_shared_models_file_download_ = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        else:
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out

        return res

    
    def files_post_file(self, request: operations.FilesPostFileRequest) -> operations.FilesPostFileResponse:
        r"""Create the metadata for a file before uploading. The State of the File should be 'Created'.
        No Documentation Found.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/v2/Files"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.FilesPostFileResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.files_post_file_200_application_json_string = r.content
            if utils.match_content_type(content_type, "application/xml"):
                res.files_post_file_200_application_xml_string = r.content
            if utils.match_content_type(content_type, "text/json"):
                res.files_post_file_200_text_json_string = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.files_post_file_200_text_xml_string = r.content
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def files_put_file(self, request: operations.FilesPutFileRequest) -> operations.FilesPutFileResponse:
        r"""Update the metadata for a file. Size may not be modified by the client.
        Update the metadata for a file. Size may not be modified by the client. 
                        Set status to 'Available' to publish a file. The file must be uploaded.
                        Set status to 'Created' to reset a file's contents and re-upload. 
                        A file may only be 'Removed' by the DELETE method.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v2/Files/{ID}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.FilesPutFileResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def files_put_file_contents(self, request: operations.FilesPutFileContentsRequest) -> operations.FilesPutFileContentsResponse:
        r"""Upload the contents of a file. The current State of the File should be 'Created'.
        No Documentation Found.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v2/Files/{ID}/FileContents", request.path_params)
        
        
        client = self._client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FilesPutFileContentsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.system_object = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.system_object = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        else:
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out

        return res

    
    def get_api_v2_authorization_code_definitions_id_(self, request: operations.GetAPIV2AuthorizationCodeDefinitionsIDRequest) -> operations.GetAPIV2AuthorizationCodeDefinitionsIDResponse:
        r"""Get an authorization code definition by its ID
        No Documentation Found.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v2/AuthorizationCodeDefinitions/{id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAPIV2AuthorizationCodeDefinitionsIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AuthorizationCodesSharedModelsAuthorizationCodeDefinition])
                res.authorization_codes_shared_models_authorization_code_definition = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AuthorizationCodesSharedModelsAuthorizationCodeDefinition])
                res.authorization_codes_shared_models_authorization_code_definition = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        else:
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out

        return res

    
    def get_api_v2_clients_id_(self, request: operations.GetAPIV2ClientsIDRequest) -> operations.GetAPIV2ClientsIDResponse:
        r"""Get a Client in the Update System.
        No Documentation Found.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v2/Clients/{ID}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAPIV2ClientsIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UpdateSystemModelsClient])
                res.update_system_models_client = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UpdateSystemModelsClient])
                res.update_system_models_client = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        else:
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out

        return res

    
    def get_api_v2_content_releases_content_release_id_(self, request: operations.GetAPIV2ContentReleasesContentReleaseIDRequest) -> operations.GetAPIV2ContentReleasesContentReleaseIDResponse:
        r"""Get a Content Release Version by ID
        Gets a ContentReleaseVersion by ID. When successful, the response is the requested ContentReleaseVersion.
                    If unsuccessful, an appropriate ApiError is returned.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v2/ContentReleases/{ContentReleaseId}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAPIV2ContentReleasesContentReleaseIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ContentSubmissionSharedBusinessEntitiesContentReleaseVersion])
                res.content_submission_shared_business_entities_content_release_version = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ContentSubmissionSharedBusinessEntitiesContentReleaseVersion])
                res.content_submission_shared_business_entities_content_release_version = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        else:
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out

        return res

    
    def get_api_v2_licenses_id_(self, request: operations.GetAPIV2LicensesIDRequest) -> operations.GetAPIV2LicensesIDResponse:
        r"""Get a license.
        No Documentation Found.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v2/Licenses/{ID}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAPIV2LicensesIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DealerDbModelsLicense])
                res.dealer_db_models_license = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DealerDbModelsLicense])
                res.dealer_db_models_license = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        else:
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out

        return res

    
    def get_api_v2_package_types_id_(self, request: operations.GetAPIV2PackageTypesIDRequest) -> operations.GetAPIV2PackageTypesIDResponse:
        r"""Get a specific Package Type.
        No Documentation Found.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v2/PackageTypes/{ID}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAPIV2PackageTypesIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UpdateSystemModelsPackageType])
                res.update_system_models_package_type = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UpdateSystemModelsPackageType])
                res.update_system_models_package_type = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        else:
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out

        return res

    
    def get_api_v2_update_groups_id_(self, request: operations.GetAPIV2UpdateGroupsIDRequest) -> operations.GetAPIV2UpdateGroupsIDResponse:
        r"""Get a specific Update Group by ID.
        No Documentation Found.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v2/UpdateGroups/{ID}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAPIV2UpdateGroupsIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UpdateSystemModelsUpdateGroup])
                res.update_system_models_update_group = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UpdateSystemModelsUpdateGroup])
                res.update_system_models_update_group = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        else:
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out

        return res

    
    def get_api_v2_users_current_permissions(self, request: operations.GetAPIV2UsersCurrentPermissionsRequest) -> operations.GetAPIV2UsersCurrentPermissionsResponse:
        r"""Get a user's permissions
        No Documentation Found.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/v2/Users/Current/Permissions"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAPIV2UsersCurrentPermissionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIPagedResponseAPIModelsUserEffectivePermission])
                res.api_paged_response_api_models_user_effective_permission_ = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIPagedResponseAPIModelsUserEffectivePermission])
                res.api_paged_response_api_models_user_effective_permission_ = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out

        return res

    
    def get_api_v2_users_id_(self, request: operations.GetAPIV2UsersIDRequest) -> operations.GetAPIV2UsersIDResponse:
        r"""Get a specific user
        No Documentation Found.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v2/Users/{id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAPIV2UsersIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsUser])
                res.api_models_user = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsUser])
                res.api_models_user = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_api_v2_vouchers_voucher_code_(self, request: operations.GetAPIV2VouchersVoucherCodeRequest) -> operations.GetAPIV2VouchersVoucherCodeResponse:
        r"""Get a voucher
        No Documentation Found.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v2/Vouchers/{VoucherCode}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAPIV2VouchersVoucherCodeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DealerDbModelsVoucher])
                res.dealer_db_models_voucher = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DealerDbModelsVoucher])
                res.dealer_db_models_voucher = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def global_image_categories_get_file(self, request: operations.GlobalImageCategoriesGetFileRequest) -> operations.GlobalImageCategoriesGetFileResponse:
        r"""Gets a file's metadata.
        No Documentation Found.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v2/GlobalImageCategories/{ID}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GlobalImageCategoriesGetFileResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GlobalResourcesSharedModelsGlobalImageCategory])
                res.global_resources_shared_models_global_image_category = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GlobalResourcesSharedModelsGlobalImageCategory])
                res.global_resources_shared_models_global_image_category = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        else:
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out

        return res

    
    def global_image_categories_get_files(self, request: operations.GlobalImageCategoriesGetFilesRequest) -> operations.GlobalImageCategoriesGetFilesResponse:
        r"""Get a paged response of file metadata.
        No Documentation Found.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/v2/GlobalImageCategories"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GlobalImageCategoriesGetFilesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIIPagedResponseGlobalResourcesSharedModelsGlobalImageCategory])
                res.api_i_paged_response_global_resources_shared_models_global_image_category_ = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIIPagedResponseGlobalResourcesSharedModelsGlobalImageCategory])
                res.api_i_paged_response_global_resources_shared_models_global_image_category_ = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        else:
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out

        return res

    
    def global_image_categories_post_file(self, request: operations.GlobalImageCategoriesPostFileRequest) -> operations.GlobalImageCategoriesPostFileResponse:
        r"""Create the metadata for a file before uploading. The State should be 'Created'.
        No Documentation Found.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/v2/GlobalImageCategories"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GlobalImageCategoriesPostFileResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.global_image_categories_post_file_200_application_json_string = r.content
            if utils.match_content_type(content_type, "application/xml"):
                res.global_image_categories_post_file_200_application_xml_string = r.content
            if utils.match_content_type(content_type, "text/json"):
                res.global_image_categories_post_file_200_text_json_string = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.global_image_categories_post_file_200_text_xml_string = r.content
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def global_images_delete_file(self, request: operations.GlobalImagesDeleteFileRequest) -> operations.GlobalImagesDeleteFileResponse:
        r"""Mark a file as 'Removed'. Disables download of the image and hides metadata from GET all method
        No Documentation Found.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v2/GlobalImages/{ID}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GlobalImagesDeleteFileResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def global_images_get_global_image(self, request: operations.GlobalImagesGetGlobalImageRequest) -> operations.GlobalImagesGetGlobalImageResponse:
        r"""Gets a GlobalImage's metadata.
        No Documentation Found.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v2/GlobalImages/{ID}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GlobalImagesGetGlobalImageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GlobalResourcesSharedModelsGlobalImage])
                res.global_resources_shared_models_global_image = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GlobalResourcesSharedModelsGlobalImage])
                res.global_resources_shared_models_global_image = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        else:
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out

        return res

    
    def global_images_get_global_image_contents(self, request: operations.GlobalImagesGetGlobalImageContentsRequest) -> operations.GlobalImagesGetGlobalImageContentsResponse:
        r"""Download the contents of a GlobalImage. The current State of the GlobalImage should be 'Available'.
        No Documentation Found.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v2/GlobalImages/{ID}/ImageContents", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GlobalImagesGetGlobalImageContentsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.system_object = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.system_object = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        else:
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out

        return res

    
    def global_images_get_global_images(self, request: operations.GlobalImagesGetGlobalImagesRequest) -> operations.GlobalImagesGetGlobalImagesResponse:
        r"""Get a paged response of GlobalImage.
        No Documentation Found.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/v2/GlobalImages"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GlobalImagesGetGlobalImagesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIIPagedResponseGlobalResourcesSharedModelsGlobalImage])
                res.api_i_paged_response_global_resources_shared_models_global_image_ = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIIPagedResponseGlobalResourcesSharedModelsGlobalImage])
                res.api_i_paged_response_global_resources_shared_models_global_image_ = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        else:
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out

        return res

    
    def global_images_put_global_image_contents(self, request: operations.GlobalImagesPutGlobalImageContentsRequest) -> operations.GlobalImagesPutGlobalImageContentsResponse:
        r"""Upload the contents of a GlobalImage. The current State of the File for the GlobalImage should be 'Created'.
        Both the image and thumbnail must be uploaded.
                        Set isFullImage = 'True' for Full Image, isFullImage = 'False' for Thumbnail
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v2/GlobalImages/{ID}/ImageContents", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("PUT", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GlobalImagesPutGlobalImageContentsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.system_object = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.system_object = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        else:
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out

        return res

    
    def job_runs_delete_job_run(self, request: operations.JobRunsDeleteJobRunRequest) -> operations.JobRunsDeleteJobRunResponse:
        r"""Delete a JobRun
        Deletes a JobRun. When successful, the response is empty.  If unsuccessful, an appropriate
                    ApiError is returned.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v2/jobRuns/{jobRunID}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.JobRunsDeleteJobRunResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def job_runs_get_job_run(self, request: operations.JobRunsGetJobRunRequest) -> operations.JobRunsGetJobRunResponse:
        r"""Get a JobRun by ID
        Gets a JobRun by ID. When successful, the response is the requested JobRun.
                    If unsuccessful, an appropriate ApiError is returned.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v2/jobRuns/{jobRunID}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.JobRunsGetJobRunResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BuildSystemSharedDtoJobRun])
                res.build_system_shared_dto_job_run = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BuildSystemSharedDtoJobRun])
                res.build_system_shared_dto_job_run = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        else:
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out

        return res

    
    def job_runs_get_job_runs(self, request: operations.JobRunsGetJobRunsRequest) -> operations.JobRunsGetJobRunsResponse:
        r"""Get JobRuns
        Gets a collection of JobRuns. When successful, the response is a PagedResponse of JobRuns.
                    If unsuccessful, an appropriate ApiError is returned.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/v2/jobRuns"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.JobRunsGetJobRunsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIPagedResponseBuildSystemSharedDtoJobRun])
                res.api_paged_response_build_system_shared_dto_job_run_ = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIPagedResponseBuildSystemSharedDtoJobRun])
                res.api_paged_response_build_system_shared_dto_job_run_ = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out

        return res

    
    def job_runs_post_job_run(self, request: operations.JobRunsPostJobRunRequest) -> operations.JobRunsPostJobRunResponse:
        r"""Create a JobRun
        Creates a JobRun.  The body of the POST is the JobRun to create.  The JobRunID will be assigned on
                    creation of the JobRun.  When successful, the response is the JobRunID.  If unsuccessful, an 
                    appropriate ApiError is returned.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/v2/jobRuns"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.JobRunsPostJobRunResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[int])
                res.job_runs_post_job_run_200_application_json_int32_integer = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[int])
                res.job_runs_post_job_run_200_text_json_int32_integer = out
        else:
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out

        return res

    
    def job_runs_put_job_run(self, request: operations.JobRunsPutJobRunRequest) -> operations.JobRunsPutJobRunResponse:
        r"""Update a JobRun
        /// 
                    Updates a JobRun.  The body of the PUT is the updated JobRun.
                    When successful, the response is empty.  If unsuccessful, an appropriate ApiError is returned.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v2/jobRuns/{jobRunID}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.JobRunsPutJobRunResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def jobs_delete_job(self, request: operations.JobsDeleteJobRequest) -> operations.JobsDeleteJobResponse:
        r"""Mark the delete flag for the Job
        Deletes a Job. When successful, the response is empty.  If unsuccessful, an appropriate
                    ApiError is returned.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v2/jobs/{jobID}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.JobsDeleteJobResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def jobs_get_job(self, request: operations.JobsGetJobRequest) -> operations.JobsGetJobResponse:
        r"""Get a Job by ID
        Gets a Job by ID. When successful, the response is the requested Job.
                    If unsuccessful, an appropriate ApiError is returned.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v2/jobs/{jobID}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.JobsGetJobResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BuildSystemSharedDtoJob])
                res.build_system_shared_dto_job = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BuildSystemSharedDtoJob])
                res.build_system_shared_dto_job = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        else:
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out

        return res

    
    def jobs_get_jobs(self, request: operations.JobsGetJobsRequest) -> operations.JobsGetJobsResponse:
        r"""Get Jobs
        Gets a collection of Jobs. When successful, the response is a PagedResponse of Jobs.
                    If unsuccessful, an appropriate ApiError is returned. 
                    ///
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/v2/jobs"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.JobsGetJobsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIPagedResponseBuildSystemSharedDtoJob])
                res.api_paged_response_build_system_shared_dto_job_ = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIPagedResponseBuildSystemSharedDtoJob])
                res.api_paged_response_build_system_shared_dto_job_ = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out

        return res

    
    def jobs_post_job(self, request: operations.JobsPostJobRequest) -> operations.JobsPostJobResponse:
        r"""Create a Job
        Creates a Job.  The body of the POST is the Job to create.  The JobID will be assigned on
                    creation of the Job.  When successful, the response is the JobID.  If unsuccessful, an 
                    appropriate ApiError is returned.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/v2/jobs"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.JobsPostJobResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[int])
                res.jobs_post_job_200_application_json_int32_integer = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[int])
                res.jobs_post_job_200_text_json_int32_integer = out
        else:
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out

        return res

    
    def jobs_put_job(self, request: operations.JobsPutJobRequest) -> operations.JobsPutJobResponse:
        r"""Update a Job
        Updates a Job.  The body of the PUT is the updated Job.  When successful, the response is empty.
                    If unsuccessful, an appropriate ApiError is returned.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v2/jobs/{jobID}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.JobsPutJobResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def languages_create_language(self, request: operations.LanguagesCreateLanguageRequest) -> operations.LanguagesCreateLanguageResponse:
        r"""Add a Language to support for translations. Accepts a Language object. Returns the Id of the created object.
        No Documentation Found.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/v2/Languages"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.LanguagesCreateLanguageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[int])
                res.languages_create_language_200_application_json_int32_integer = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[int])
                res.languages_create_language_200_text_json_int32_integer = out
        else:
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out

        return res

    
    def languages_delete_language(self, request: operations.LanguagesDeleteLanguageRequest) -> operations.LanguagesDeleteLanguageResponse:
        r"""Remove a Language from those supported for translations. Marks language as deleted.
        No Documentation Found.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v2/Languages/{LocaleID}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.LanguagesDeleteLanguageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def languages_get_language(self, request: operations.LanguagesGetLanguageRequest) -> operations.LanguagesGetLanguageResponse:
        r"""Get a language by its id. Returns a Language object
        No Documentation Found.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v2/Languages/{LocaleID}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.LanguagesGetLanguageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GlobalResourcesSharedModelsLanguage])
                res.global_resources_shared_models_language = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GlobalResourcesSharedModelsLanguage])
                res.global_resources_shared_models_language = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        else:
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out

        return res

    
    def languages_get_languages(self, request: operations.LanguagesGetLanguagesRequest) -> operations.LanguagesGetLanguagesResponse:
        r"""Get a list of the languages for which translations are supported. Returns a PagedResponse of Language objects.
        No Documentation Found.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/v2/Languages"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.LanguagesGetLanguagesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIIPagedResponseGlobalResourcesSharedModelsLanguage])
                res.api_i_paged_response_global_resources_shared_models_language_ = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIIPagedResponseGlobalResourcesSharedModelsLanguage])
                res.api_i_paged_response_global_resources_shared_models_language_ = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        else:
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out

        return res

    
    def languages_update_language(self, request: operations.LanguagesUpdateLanguageRequest) -> operations.LanguagesUpdateLanguageResponse:
        r"""Update a language’s description. Accepts a Language object.
        No Documentation Found.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v2/Languages/{LocaleID}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.LanguagesUpdateLanguageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def license_activations_post(self, request: operations.LicenseActivationsPostRequest) -> operations.LicenseActivationsPostResponse:
        r"""Create a license activation.
        No Documentation Found.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/v2/LicenseActivations"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.LicenseActivationsPostResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DealerDbModelsLicenseActivation])
                res.dealer_db_models_license_activation = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DealerDbModelsLicenseActivation])
                res.dealer_db_models_license_activation = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        else:
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out

        return res

    
    def license_activations_post_register_edt_lite(self, request: operations.LicenseActivationsPostRegisterEdtLiteRequest) -> operations.LicenseActivationsPostRegisterEdtLiteResponse:
        r"""Register an EDT Lite with the Server
        No Documentation Found.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/v2/LicenseActivations/RegisterEDTLite"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.LicenseActivationsPostRegisterEdtLiteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[bool])
                res.license_activations_post_register_edt_lite_200_application_json_boolean = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[bool])
                res.license_activations_post_register_edt_lite_200_text_json_boolean = out
        else:
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out

        return res

    
    def license_activations_put(self, request: operations.LicenseActivationsPutRequest) -> operations.LicenseActivationsPutResponse:
        r"""Update a license activiation.
        No Documentation Found.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v2/LicenseActivations/{ID}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.LicenseActivationsPutResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DealerDbModelsLicenseActivation])
                res.dealer_db_models_license_activation = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DealerDbModelsLicenseActivation])
                res.dealer_db_models_license_activation = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        else:
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out

        return res

    
    def license_activations_put_confirm(self, request: operations.LicenseActivationsPutConfirmRequest) -> operations.LicenseActivationsPutConfirmResponse:
        r"""Confirm that the client has applied the updated license.
        No Documentation Found.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v2/LicenseActivations/{ID}/Confirm", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.LicenseActivationsPutConfirmResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def licenses_get(self, request: operations.LicensesGetRequest) -> operations.LicensesGetResponse:
        r"""Gets a list of licenses with the specified criteria.
        No Documentation Found.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/v2/Licenses"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.LicensesGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIPagedResponseDealerDbModelsLicense])
                res.api_paged_response_dealer_db_models_license_ = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIPagedResponseDealerDbModelsLicense])
                res.api_paged_response_dealer_db_models_license_ = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out

        return res

    
    def logs_get_log(self, request: operations.LogsGetLogRequest) -> operations.LogsGetLogResponse:
        r"""Get a log by ID
        No Documentation Found.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v2/Logs/{ID}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.LogsGetLogResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsLog])
                res.api_models_log = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsLog])
                res.api_models_log = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        else:
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out

        return res

    
    def logs_get_logs(self, request: operations.LogsGetLogsRequest) -> operations.LogsGetLogsResponse:
        r"""Get the API System logs, most recent first.
        No Documentation Found.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/v2/Logs"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.LogsGetLogsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIPagedResponseAPIModelsLog])
                res.api_paged_response_api_models_log_ = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIPagedResponseAPIModelsLog])
                res.api_paged_response_api_models_log_ = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out

        return res

    
    def logs_post_log(self, request: operations.LogsPostLogRequest) -> operations.LogsPostLogResponse:
        r"""Add a Log entry
        No Documentation Found.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/v2/Logs"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.LogsPostLogResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.logs_post_log_200_application_json_string = r.content
            if utils.match_content_type(content_type, "application/xml"):
                res.logs_post_log_200_application_xml_string = r.content
            if utils.match_content_type(content_type, "text/json"):
                res.logs_post_log_200_text_json_string = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.logs_post_log_200_text_xml_string = r.content
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def notifications_post_mail(self, request: operations.NotificationsPostMailRequest) -> operations.NotificationsPostMailResponse:
        r"""Sends an email message.
        No Documentation Found.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/v2/Notifications"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.NotificationsPostMailResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def package_reports_default(self, request: operations.PackageReportsDefaultRequest) -> operations.PackageReportsDefaultResponse:
        r"""Get the package reports for a client.
        No Documentation Found.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v2/Clients/{ClientID}/PackageReports", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PackageReportsDefaultResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.UpdateSystemModelsPackageReport]])
                res.update_system_models_package_reports = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.UpdateSystemModelsPackageReport]])
                res.update_system_models_package_reports = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        else:
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out

        return res

    
    def package_types_add_package_type_user(self, request: operations.PackageTypesAddPackageTypeUserRequest) -> operations.PackageTypesAddPackageTypeUserResponse:
        r"""Add a package type that a user can see.
        No Documentation Found.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v2/PackageTypes/{id}/Users/{userID}", request.path_params)
        
        
        client = self._client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PackageTypesAddPackageTypeUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def package_types_delete(self, request: operations.PackageTypesDeleteRequest) -> operations.PackageTypesDeleteResponse:
        r"""Delete a Package Type.
        No Documentation Found.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v2/PackageTypes/{ID}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PackageTypesDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def package_types_get(self, request: operations.PackageTypesGetRequest) -> operations.PackageTypesGetResponse:
        r"""Get all of the Package Types.
        No Documentation Found.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/v2/PackageTypes"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PackageTypesGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIPagedResponseUpdateSystemModelsPackageType])
                res.api_paged_response_update_system_models_package_type_ = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIPagedResponseUpdateSystemModelsPackageType])
                res.api_paged_response_update_system_models_package_type_ = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out

        return res

    
    def package_types_post(self, request: operations.PackageTypesPostRequest) -> operations.PackageTypesPostResponse:
        r"""Add a Package Type.
        No Documentation Found.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/v2/PackageTypes"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PackageTypesPostResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.package_types_post_200_application_json_string = r.content
            if utils.match_content_type(content_type, "application/xml"):
                res.package_types_post_200_application_xml_string = r.content
            if utils.match_content_type(content_type, "text/json"):
                res.package_types_post_200_text_json_string = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.package_types_post_200_text_xml_string = r.content
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def package_types_put(self, request: operations.PackageTypesPutRequest) -> operations.PackageTypesPutResponse:
        r"""Modify a Package Type.
        No Documentation Found.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v2/PackageTypes/{ID}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PackageTypesPutResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def package_types_remove_package_type_user(self, request: operations.PackageTypesRemovePackageTypeUserRequest) -> operations.PackageTypesRemovePackageTypeUserResponse:
        r"""Deletes a package type a user could see.
        No Documentation Found.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v2/PackageTypes/{id}/Users/{userID}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PackageTypesRemovePackageTypeUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def package_typeto_bundles_delete(self, request: operations.PackageTypetoBundlesDeleteRequest) -> operations.PackageTypetoBundlesDeleteResponse:
        r"""Delete a Package Type to Bundle Relationship.
        No Documentation Found.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/v2/PackageTypetoBundles"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PackageTypetoBundlesDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def package_typeto_bundles_get(self, request: operations.PackageTypetoBundlesGetRequest) -> operations.PackageTypetoBundlesGetResponse:
        r"""Get all of the Package Type to Bundle Relationships.
        No Documentation Found.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/v2/PackageTypetoBundles"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PackageTypetoBundlesGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIPagedResponseUpdateSystemModelsPackageTypeIDtoBundle])
                res.api_paged_response_update_system_models_package_type_i_dto_bundle_ = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIPagedResponseUpdateSystemModelsPackageTypeIDtoBundle])
                res.api_paged_response_update_system_models_package_type_i_dto_bundle_ = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out

        return res

    
    def package_typeto_bundles_post(self, request: operations.PackageTypetoBundlesPostRequest) -> operations.PackageTypetoBundlesPostResponse:
        r"""Add a new Package Type ID to Bundle Relationship.
        No Documentation Found.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/v2/PackageTypetoBundles"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PackageTypetoBundlesPostResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def package_typeto_bundles_put(self, request: operations.PackageTypetoBundlesPutRequest) -> operations.PackageTypetoBundlesPutResponse:
        r"""Update a Package Type ID to Bundle Relationship.
        No Documentation Found.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/v2/PackageTypetoBundles"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PackageTypetoBundlesPutResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def packages_delete_package(self, request: operations.PackagesDeletePackageRequest) -> operations.PackagesDeletePackageResponse:
        r"""Delete a Package.
        No Documentation Found.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v2/Packages/{ID}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PackagesDeletePackageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def packages_get_package(self, request: operations.PackagesGetPackageRequest) -> operations.PackagesGetPackageResponse:
        r"""Find a Package.
        No Documentation Found.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v2/Packages/{ID}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PackagesGetPackageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UpdateSystemModelsPackage])
                res.update_system_models_package = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UpdateSystemModelsPackage])
                res.update_system_models_package = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        else:
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out

        return res

    
    def packages_get_packages(self, request: operations.PackagesGetPackagesRequest) -> operations.PackagesGetPackagesResponse:
        r"""List Packages.
        No Documentation Found.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/v2/Packages"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PackagesGetPackagesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIPagedResponseUpdateSystemModelsPackage])
                res.api_paged_response_update_system_models_package_ = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIPagedResponseUpdateSystemModelsPackage])
                res.api_paged_response_update_system_models_package_ = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out

        return res

    
    def packages_post_package(self, request: operations.PackagesPostPackageRequest) -> operations.PackagesPostPackageResponse:
        r"""Add a Package to the Update System.
        No Documentation Found.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/v2/Packages"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PackagesPostPackageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.packages_post_package_200_application_json_string = r.content
            if utils.match_content_type(content_type, "application/xml"):
                res.packages_post_package_200_application_xml_string = r.content
            if utils.match_content_type(content_type, "text/json"):
                res.packages_post_package_200_text_json_string = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.packages_post_package_200_text_xml_string = r.content
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def packages_put_package(self, request: operations.PackagesPutPackageRequest) -> operations.PackagesPutPackageResponse:
        r"""Modify a Packge to the Update System.
        No Documentation Found.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v2/Packages/{ID}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PackagesPutPackageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def permissions_delete_permission(self, request: operations.PermissionsDeletePermissionRequest) -> operations.PermissionsDeletePermissionResponse:
        r"""Deletes a Permission
        No Documentation Found.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v2/Permissions/{id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PermissionsDeletePermissionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def permissions_get_permission(self, request: operations.PermissionsGetPermissionRequest) -> operations.PermissionsGetPermissionResponse:
        r"""Gets a Permission
        No Documentation Found.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v2/Permissions/{id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PermissionsGetPermissionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsPermission])
                res.api_models_permission = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsPermission])
                res.api_models_permission = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def permissions_get_permissions(self, request: operations.PermissionsGetPermissionsRequest) -> operations.PermissionsGetPermissionsResponse:
        r"""List Permissions
        No Documentation Found.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/v2/Permissions"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PermissionsGetPermissionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIPagedResponseAPIModelsPermission])
                res.api_paged_response_api_models_permission_ = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIPagedResponseAPIModelsPermission])
                res.api_paged_response_api_models_permission_ = out

        return res

    
    def permissions_post_permission(self, request: operations.PermissionsPostPermissionRequest) -> operations.PermissionsPostPermissionResponse:
        r"""Adds a Permission
        No Documentation Found.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/v2/Permissions"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PermissionsPostPermissionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[int])
                res.permissions_post_permission_200_application_json_int32_integer = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[int])
                res.permissions_post_permission_200_text_json_int32_integer = out

        return res

    
    def permissions_put_permission(self, request: operations.PermissionsPutPermissionRequest) -> operations.PermissionsPutPermissionResponse:
        r"""Updates a Permission
        No Documentation Found.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v2/Permissions/{id}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PermissionsPutPermissionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def priority_packages_delete_priority_packages(self, request: operations.PriorityPackagesDeletePriorityPackagesRequest) -> operations.PriorityPackagesDeletePriorityPackagesResponse:
        r"""Delete a Priority Package for a Client.
        No Documentation Found.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v2/PriorityPackages/{ID}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PriorityPackagesDeletePriorityPackagesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def priority_packages_get_priority_package(self, request: operations.PriorityPackagesGetPriorityPackageRequest) -> operations.PriorityPackagesGetPriorityPackageResponse:
        r"""Get a Priority Packages for a Client.
        No Documentation Found.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v2/PriorityPackages/{ID}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PriorityPackagesGetPriorityPackageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UpdateSystemModelsPriorityPackage])
                res.update_system_models_priority_package = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UpdateSystemModelsPriorityPackage])
                res.update_system_models_priority_package = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        else:
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out

        return res

    
    def priority_packages_get_priority_packages(self, request: operations.PriorityPackagesGetPriorityPackagesRequest) -> operations.PriorityPackagesGetPriorityPackagesResponse:
        r"""Get a list of Priority Packages by Client.
        No Documentation Found.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/v2/PriorityPackages"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PriorityPackagesGetPriorityPackagesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIPagedResponseUpdateSystemModelsPriorityPackage])
                res.api_paged_response_update_system_models_priority_package_ = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIPagedResponseUpdateSystemModelsPriorityPackage])
                res.api_paged_response_update_system_models_priority_package_ = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out

        return res

    
    def priority_packages_post_priority_packages(self, request: operations.PriorityPackagesPostPriorityPackagesRequest) -> operations.PriorityPackagesPostPriorityPackagesResponse:
        r"""Add a Priority Package for a Client.
        No Documentation Found.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/v2/PriorityPackages"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PriorityPackagesPostPriorityPackagesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.priority_packages_post_priority_packages_200_application_json_string = r.content
            if utils.match_content_type(content_type, "application/xml"):
                res.priority_packages_post_priority_packages_200_application_xml_string = r.content
            if utils.match_content_type(content_type, "text/json"):
                res.priority_packages_post_priority_packages_200_text_json_string = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.priority_packages_post_priority_packages_200_text_xml_string = r.content
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def release_delete_release_bundle(self, request: operations.ReleaseDeleteReleaseBundleRequest) -> operations.ReleaseDeleteReleaseBundleResponse:
        r"""Deletes the association between a release and a bundle.
        No Documentation Found.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v2/Releases/{ReleaseId}/Bundle/{BundleId}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ReleaseDeleteReleaseBundleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def release_get_release(self, request: operations.ReleaseGetReleaseRequest) -> operations.ReleaseGetReleaseResponse:
        r"""Get a  Release by ID
        Gets a Release by ID. When successful, the response is the requested Release.
                    If unsuccessful, an appropriate ApiError is returned.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v2/Releases/{ReleaseId}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ReleaseGetReleaseResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ContentSubmissionSharedBusinessEntitiesRelease])
                res.content_submission_shared_business_entities_release = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ContentSubmissionSharedBusinessEntitiesRelease])
                res.content_submission_shared_business_entities_release = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        else:
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out

        return res

    
    def release_get_releases(self, request: operations.ReleaseGetReleasesRequest) -> operations.ReleaseGetReleasesResponse:
        r"""Get Release
        Gets a collection of Release. When successful, the response is a PagedResponse of Release.
                    If unsuccessful, an appropriate ApiError is returned.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/v2/Releases"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ReleaseGetReleasesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIPagedResponseContentSubmissionSharedBusinessEntitiesRelease])
                res.api_paged_response_content_submission_shared_business_entities_release_ = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIPagedResponseContentSubmissionSharedBusinessEntitiesRelease])
                res.api_paged_response_content_submission_shared_business_entities_release_ = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out

        return res

    
    def release_post_release(self, request: operations.ReleasePostReleaseRequest) -> operations.ReleasePostReleaseResponse:
        r"""Create a Release
        Creates a Release.  The body of the POST is the Release to create.
                    The ReleaseId will be assigned on creation of the Job.  When successful, the response
                    is the Release Id.  If unsuccessful, an appropriate ApiError is returned.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/v2/Releases"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ReleasePostReleaseResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[int])
                res.release_post_release_200_application_json_int32_integer = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[int])
                res.release_post_release_200_text_json_int32_integer = out
        else:
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out

        return res

    
    def release_post_release_bundle(self, request: operations.ReleasePostReleaseBundleRequest) -> operations.ReleasePostReleaseBundleResponse:
        r"""Associates the release with a bundle.
        No Documentation Found.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v2/Releases/{ReleaseId}/Bundle/{BundleId}", request.path_params)
        
        
        client = self._client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ReleasePostReleaseBundleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def release_put_content_definition(self, request: operations.ReleasePutContentDefinitionRequest) -> operations.ReleasePutContentDefinitionResponse:
        r"""Update a Release
        Updates a Release.  The body of the PUT is the updated Release.  
                    When successful, the response is empty.  If unsuccessful, an appropriate ApiError is returned.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v2/Releases/{releaseId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ReleasePutContentDefinitionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def reporting_bundle_status_summary(self, request: operations.ReportingBundleStatusSummaryRequest) -> operations.ReportingBundleStatusSummaryResponse:
        r"""Get a summary of all Packages in a Bundle
        No Documentation Found.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/v2/Reporting/BundleStatusSummary"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ReportingBundleStatusSummaryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIPagedResponseUpdateSystemModelsPackageStatusSummary])
                res.api_paged_response_update_system_models_package_status_summary_ = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIPagedResponseUpdateSystemModelsPackageStatusSummary])
                res.api_paged_response_update_system_models_package_status_summary_ = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out

        return res

    
    def reporting_bundles_in_update_group(self, request: operations.ReportingBundlesInUpdateGroupRequest) -> operations.ReportingBundlesInUpdateGroupResponse:
        r"""Get a list of bundles for UpdateGroup.
        No Documentation Found.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/v2/Reporting/BundlesInUpdateGroup"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ReportingBundlesInUpdateGroupResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIPagedResponseUpdateSystemModelsBundle])
                res.api_paged_response_update_system_models_bundle_ = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIPagedResponseUpdateSystemModelsBundle])
                res.api_paged_response_update_system_models_bundle_ = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out

        return res

    
    def reporting_client_info(self, request: operations.ReportingClientInfoRequest) -> operations.ReportingClientInfoResponse:
        r"""Get Client Information
        No Documentation Found.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/v2/Reporting/ClientInfo"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ReportingClientInfoResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UpdateSystemModelsClientInfo])
                res.update_system_models_client_info = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UpdateSystemModelsClientInfo])
                res.update_system_models_client_info = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        else:
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out

        return res

    
    def reporting_current_packages_in_update_group(self, request: operations.ReportingCurrentPackagesInUpdateGroupRequest) -> operations.ReportingCurrentPackagesInUpdateGroupResponse:
        r"""Get the current packages for an update group.
        No Documentation Found.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/v2/Reporting/CurrentPackagesInUpdateGroup"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ReportingCurrentPackagesInUpdateGroupResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.UpdateSystemModelsPackage]])
                res.update_system_models_packages = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.UpdateSystemModelsPackage]])
                res.update_system_models_packages = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        else:
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out

        return res

    
    def reporting_get_client(self, request: operations.ReportingGetClientRequest) -> operations.ReportingGetClientResponse:
        r"""Get a Client in the Update System.
        No Documentation Found.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/v2/Reporting/GetClient"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ReportingGetClientResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UpdateSystemModelsClient])
                res.update_system_models_client = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UpdateSystemModelsClient])
                res.update_system_models_client = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        else:
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out

        return res

    
    def reporting_get_subscriptions(self, request: operations.ReportingGetSubscriptionsRequest) -> operations.ReportingGetSubscriptionsResponse:
        r"""Get a list of current Client Subscriptions.
        No Documentation Found.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/v2/Reporting/GetSubscriptions"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ReportingGetSubscriptionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIPagedResponseUpdateSystemModelsUpdateGroupClientRelationship])
                res.api_paged_response_update_system_models_update_group_client_relationship_ = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIPagedResponseUpdateSystemModelsUpdateGroupClientRelationship])
                res.api_paged_response_update_system_models_update_group_client_relationship_ = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out

        return res

    
    def reporting_package_status_summary(self, request: operations.ReportingPackageStatusSummaryRequest) -> operations.ReportingPackageStatusSummaryResponse:
        r"""Get a summary report for a Specific Package
        No Documentation Found.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/v2/Reporting/PackageStatusSummary"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ReportingPackageStatusSummaryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UpdateSystemModelsPackageStatusSummary])
                res.update_system_models_package_status_summary = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UpdateSystemModelsPackageStatusSummary])
                res.update_system_models_package_status_summary = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        else:
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out

        return res

    
    def reporting_registered_clients(self, request: operations.ReportingRegisteredClientsRequest) -> operations.ReportingRegisteredClientsResponse:
        r"""Get a list of subscribed clients
        No Documentation Found.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/v2/Reporting/RegisteredClients"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ReportingRegisteredClientsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIPagedResponseUpdateSystemModelsClientStatusUpdateSystemModelsPagedClientStatusMetadata])
                res.api_paged_response_update_system_models_client_status_update_system_models_paged_client_status_metadata_ = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIPagedResponseUpdateSystemModelsClientStatusUpdateSystemModelsPagedClientStatusMetadata])
                res.api_paged_response_update_system_models_client_status_update_system_models_paged_client_status_metadata_ = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out

        return res

    
    def reporting_update_groups(self, request: operations.ReportingUpdateGroupsRequest) -> operations.ReportingUpdateGroupsResponse:
        r"""Get a list of Update Groups.  Update Groups are used by the client to register for a specific type of update.
        No Documentation Found.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/v2/Reporting/UpdateGroups"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ReportingUpdateGroupsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIPagedResponseUpdateSystemModelsUpdateGroup])
                res.api_paged_response_update_system_models_update_group_ = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIPagedResponseUpdateSystemModelsUpdateGroup])
                res.api_paged_response_update_system_models_update_group_ = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out

        return res

    
    def reporting_update_metrics(self, request: operations.ReportingUpdateMetricsRequest) -> operations.ReportingUpdateMetricsResponse:
        r"""Get data for pie charts in UpdateMetrics.
        No Documentation Found.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/v2/Reporting/UpdateMetrics"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ReportingUpdateMetricsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UpdateSystemModelsUpdateMetricsData])
                res.update_system_models_update_metrics_data = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UpdateSystemModelsUpdateMetricsData])
                res.update_system_models_update_metrics_data = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        else:
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out

        return res

    
    def roles_delete_role(self, request: operations.RolesDeleteRoleRequest) -> operations.RolesDeleteRoleResponse:
        r"""Deletes a User Role
        No Documentation Found.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v2/Roles/{id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.RolesDeleteRoleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def roles_get_role(self, request: operations.RolesGetRoleRequest) -> operations.RolesGetRoleResponse:
        r"""Gets a User Role
        No Documentation Found.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v2/Roles/{id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.RolesGetRoleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsRole])
                res.api_models_role = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsRole])
                res.api_models_role = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def roles_get_role_permissions(self, request: operations.RolesGetRolePermissionsRequest) -> operations.RolesGetRolePermissionsResponse:
        r"""Get the Permissions for a Role
        No Documentation Found.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v2/Roles/{id}/Permissions", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.RolesGetRolePermissionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIPagedResponseAPIModelsPermission])
                res.api_paged_response_api_models_permission_ = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIPagedResponseAPIModelsPermission])
                res.api_paged_response_api_models_permission_ = out

        return res

    
    def roles_get_roles(self, request: operations.RolesGetRolesRequest) -> operations.RolesGetRolesResponse:
        r"""List Roles
        No Documentation Found.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/v2/Roles"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.RolesGetRolesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIPagedResponseAPIModelsRole])
                res.api_paged_response_api_models_role_ = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIPagedResponseAPIModelsRole])
                res.api_paged_response_api_models_role_ = out

        return res

    
    def roles_post_role(self, request: operations.RolesPostRoleRequest) -> operations.RolesPostRoleResponse:
        r"""Adds a User Role
        No Documentation Found.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/v2/Roles"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RolesPostRoleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[int])
                res.roles_post_role_200_application_json_int32_integer = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[int])
                res.roles_post_role_200_text_json_int32_integer = out

        return res

    
    def roles_put_role(self, request: operations.RolesPutRoleRequest) -> operations.RolesPutRoleResponse:
        r"""Updates a User Role
        No Documentation Found.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v2/Roles/{id}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RolesPutRoleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def steps_get_step(self, request: operations.StepsGetStepRequest) -> operations.StepsGetStepResponse:
        r"""Get a Step by ID
        Gets a Step by ID. When successful, the response is the requested Step.
                    If unsuccessful, an appropriate ApiError is returned.  Steps.Read permission is required.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v2/steps/{stepID}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.StepsGetStepResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BuildSystemSharedDtoStep])
                res.build_system_shared_dto_step = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BuildSystemSharedDtoStep])
                res.build_system_shared_dto_step = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        else:
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out

        return res

    
    def steps_get_steps(self, request: operations.StepsGetStepsRequest) -> operations.StepsGetStepsResponse:
        r"""Get Steps
        Gets a collection of Steps. When successful, the response is a PagedResponse of Steps.
                    If unsuccessful, an appropriate ApiError is returned.  Steps.Read permission is required.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/v2/steps"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.StepsGetStepsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIPagedResponseBuildSystemSharedDtoStep])
                res.api_paged_response_build_system_shared_dto_step_ = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIPagedResponseBuildSystemSharedDtoStep])
                res.api_paged_response_build_system_shared_dto_step_ = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out

        return res

    
    def steps_post_step(self, request: operations.StepsPostStepRequest) -> operations.StepsPostStepResponse:
        r"""Create a Step
        No Documentation Found.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/v2/steps"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.StepsPostStepResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[int])
                res.steps_post_step_200_application_json_int32_integer = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[int])
                res.steps_post_step_200_text_json_int32_integer = out
        else:
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out

        return res

    
    def steps_put_step(self, request: operations.StepsPutStepRequest) -> operations.StepsPutStepResponse:
        r"""Update a Step
        No Documentation Found.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v2/steps/{stepID}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.StepsPutStepResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def string_definitions_get_definition(self, request: operations.StringDefinitionsGetDefinitionRequest) -> operations.StringDefinitionsGetDefinitionResponse:
        r"""Get a paged response of Global String Definitions.
        No Documentation Found.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v2/StringDefinitions/{ID}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.StringDefinitionsGetDefinitionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GlobalResourcesSharedModelsStringDefinition])
                res.global_resources_shared_models_string_definition = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GlobalResourcesSharedModelsStringDefinition])
                res.global_resources_shared_models_string_definition = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        else:
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out

        return res

    
    def string_definitions_get_definitions(self, request: operations.StringDefinitionsGetDefinitionsRequest) -> operations.StringDefinitionsGetDefinitionsResponse:
        r"""Get a paged response of Global String Definitions.
        No Documentation Found.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/v2/StringDefinitions"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.StringDefinitionsGetDefinitionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIIPagedResponseGlobalResourcesSharedModelsStringDefinition])
                res.api_i_paged_response_global_resources_shared_models_string_definition_ = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIIPagedResponseGlobalResourcesSharedModelsStringDefinition])
                res.api_i_paged_response_global_resources_shared_models_string_definition_ = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        else:
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out

        return res

    
    def string_translations_get_translation(self, request: operations.StringTranslationsGetTranslationRequest) -> operations.StringTranslationsGetTranslationResponse:
        r"""Get a single translation based upon stringId and languageId
        No Documentation Found.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v2/StringTranslations/{stringId}/{languageId}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.StringTranslationsGetTranslationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GlobalResourcesSharedModelsStringTranslation])
                res.global_resources_shared_models_string_translation = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GlobalResourcesSharedModelsStringTranslation])
                res.global_resources_shared_models_string_translation = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        else:
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out

        return res

    
    def string_translations_get_translations(self, request: operations.StringTranslationsGetTranslationsRequest) -> operations.StringTranslationsGetTranslationsResponse:
        r"""Get a paged response of Global String Translations.
        No Documentation Found.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/v2/StringTranslations"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.StringTranslationsGetTranslationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIIPagedResponseGlobalResourcesSharedModelsStringTranslation])
                res.api_i_paged_response_global_resources_shared_models_string_translation_ = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIIPagedResponseGlobalResourcesSharedModelsStringTranslation])
                res.api_i_paged_response_global_resources_shared_models_string_translation_ = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        else:
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out

        return res

    
    def string_translations_update_translation(self, request: operations.StringTranslationsUpdateTranslationRequest) -> operations.StringTranslationsUpdateTranslationResponse:
        r"""Update a string value or a state for a string translation.
        No Documentation Found.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v2/StringTranslations/{stringId}/{languageId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.StringTranslationsUpdateTranslationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def translation_keys_create_translation_key(self, request: operations.TranslationKeysCreateTranslationKeyRequest) -> operations.TranslationKeysCreateTranslationKeyResponse:
        r"""Create a translationKey object.
        No Documentation Found.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/v2/TranslationKeys"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.TranslationKeysCreateTranslationKeyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[int])
                res.translation_keys_create_translation_key_200_application_json_int32_integer = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[int])
                res.translation_keys_create_translation_key_200_text_json_int32_integer = out
        else:
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out

        return res

    
    def translation_keys_get(self, request: operations.TranslationKeysGetRequest) -> operations.TranslationKeysGetResponse:
        r"""Get a paged response of TranslationKeys.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/v2/TranslationKeys"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.TranslationKeysGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIIPagedResponseOasSupportSharedModelsTranslationKey])
                res.api_i_paged_response_oas_support_shared_models_translation_key_ = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIIPagedResponseOasSupportSharedModelsTranslationKey])
                res.api_i_paged_response_oas_support_shared_models_translation_key_ = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        else:
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out

        return res

    
    def translation_keys_get_translation_key(self, request: operations.TranslationKeysGetTranslationKeyRequest) -> operations.TranslationKeysGetTranslationKeyResponse:
        r"""Get TranslationKey by ID
        No Documentation Found.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v2/TranslationKeys/{ID}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.TranslationKeysGetTranslationKeyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OasSupportSharedModelsTranslationKey])
                res.oas_support_shared_models_translation_key = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OasSupportSharedModelsTranslationKey])
                res.oas_support_shared_models_translation_key = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        else:
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out

        return res

    
    def translation_keys_update_translation_key(self, request: operations.TranslationKeysUpdateTranslationKeyRequest) -> operations.TranslationKeysUpdateTranslationKeyResponse:
        r"""Update the StringID of the translationKey object.
        No Documentation Found.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v2/TranslationKeys/{ID}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.TranslationKeysUpdateTranslationKeyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def translation_requests_create_translation_request(self, request: operations.TranslationRequestsCreateTranslationRequestRequest) -> operations.TranslationRequestsCreateTranslationRequestResponse:
        r"""Create a translation request. Accepts a TranslationRequest object. Returns the Id of the created object. The state of the TranslationRequest must be ‘NotSubmitted’.
        No Documentation Found.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/v2/TranslationRequests"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.TranslationRequestsCreateTranslationRequestResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[int])
                res.translation_requests_create_translation_request_200_application_json_int32_integer = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[int])
                res.translation_requests_create_translation_request_200_text_json_int32_integer = out
        else:
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out

        return res

    
    def translation_requests_get_translation_request(self, request: operations.TranslationRequestsGetTranslationRequestRequest) -> operations.TranslationRequestsGetTranslationRequestResponse:
        r"""Get a TranslationRequest object by id. Returns TranslationRequest object with its language ids and string ids.
        No Documentation Found.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v2/TranslationRequests/{Id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.TranslationRequestsGetTranslationRequestResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GlobalResourcesSharedModelsTranslationRequest])
                res.global_resources_shared_models_translation_request = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GlobalResourcesSharedModelsTranslationRequest])
                res.global_resources_shared_models_translation_request = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        else:
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out

        return res

    
    def translation_requests_get_translation_requests(self, request: operations.TranslationRequestsGetTranslationRequestsRequest) -> operations.TranslationRequestsGetTranslationRequestsResponse:
        r"""Get all TranslationRequest objects. Returns a PagedResponse of TranslationRequest objects with their language ids and string ids.
        No Documentation Found.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/v2/TranslationRequests"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.TranslationRequestsGetTranslationRequestsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIIPagedResponseGlobalResourcesSharedModelsTranslationRequest])
                res.api_i_paged_response_global_resources_shared_models_translation_request_ = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIIPagedResponseGlobalResourcesSharedModelsTranslationRequest])
                res.api_i_paged_response_global_resources_shared_models_translation_request_ = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        else:
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out

        return res

    
    def translation_requests_update_translation_request(self, request: operations.TranslationRequestsUpdateTranslationRequestRequest) -> operations.TranslationRequestsUpdateTranslationRequestResponse:
        r"""Update a TranslationRequest object by id. Accepts a TranslationRequest object.
        No Documentation Found.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v2/TranslationRequests/{Id}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.TranslationRequestsUpdateTranslationRequestResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def translation_sets_delete_translation_set_attribute(self, request: operations.TranslationSetsDeleteTranslationSetAttributeRequest) -> operations.TranslationSetsDeleteTranslationSetAttributeResponse:
        r"""Delete a set of TranslationSetAttribute object
        No Documentation Found.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v2/TranslationSetAttributes/{ID}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.TranslationSetsDeleteTranslationSetAttributeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def translation_sets_get_source_strings(self, request: operations.TranslationSetsGetSourceStringsRequest) -> operations.TranslationSetsGetSourceStringsResponse:
        r"""Gets the information needed to translate a string in a translation set
        No Documentation Found.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v2/TranslationSets/{ID}/SourceStrings", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.TranslationSetsGetSourceStringsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIIPagedResponseGlobalResourcesSharedModelsTranslationSetSourceString])
                res.api_i_paged_response_global_resources_shared_models_translation_set_source_string_ = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIIPagedResponseGlobalResourcesSharedModelsTranslationSetSourceString])
                res.api_i_paged_response_global_resources_shared_models_translation_set_source_string_ = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        else:
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out

        return res

    
    def translation_sets_get_statistics(self, request: operations.TranslationSetsGetStatisticsRequest) -> operations.TranslationSetsGetStatisticsResponse:
        r"""Gets the statistics for translation sets such as the language ids and count of string definitions.
        No Documentation Found.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v2/TranslationSets/{ID}/Statistics", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.TranslationSetsGetStatisticsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GlobalResourcesSharedModelsTranslationSetStatistics])
                res.global_resources_shared_models_translation_set_statistics = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GlobalResourcesSharedModelsTranslationSetStatistics])
                res.global_resources_shared_models_translation_set_statistics = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        else:
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out

        return res

    
    def translation_sets_get_translation_set(self, request: operations.TranslationSetsGetTranslationSetRequest) -> operations.TranslationSetsGetTranslationSetResponse:
        r"""Get a TranslationSet object by its id. Related TranslationSetStrings are NOT returned.
        No Documentation Found.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v2/TranslationSets/{ID}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.TranslationSetsGetTranslationSetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GlobalResourcesSharedModelsTranslationSet])
                res.global_resources_shared_models_translation_set = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GlobalResourcesSharedModelsTranslationSet])
                res.global_resources_shared_models_translation_set = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        else:
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out

        return res

    
    def translation_sets_get_translation_set_attributes(self, request: operations.TranslationSetsGetTranslationSetAttributesRequest) -> operations.TranslationSetsGetTranslationSetAttributesResponse:
        r"""Get a PagedResponse of TranslationSetAttribute objects
        No Documentation Found.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v2/TranslationSets/{ID}/Attributes", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.TranslationSetsGetTranslationSetAttributesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIIPagedResponseGlobalResourcesSharedModelsTranslationSetAttribute])
                res.api_i_paged_response_global_resources_shared_models_translation_set_attribute_ = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIIPagedResponseGlobalResourcesSharedModelsTranslationSetAttribute])
                res.api_i_paged_response_global_resources_shared_models_translation_set_attribute_ = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        else:
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out

        return res

    
    def translation_sets_get_translation_set_strings(self, request: operations.TranslationSetsGetTranslationSetStringsRequest) -> operations.TranslationSetsGetTranslationSetStringsResponse:
        r"""Get a PagedResponse of TranslationSetString objects
        No Documentation Found.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v2/TranslationSets/{ID}/Strings", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.TranslationSetsGetTranslationSetStringsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIIPagedResponseGlobalResourcesSharedModelsTranslationSetString])
                res.api_i_paged_response_global_resources_shared_models_translation_set_string_ = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIIPagedResponseGlobalResourcesSharedModelsTranslationSetString])
                res.api_i_paged_response_global_resources_shared_models_translation_set_string_ = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        else:
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out

        return res

    
    def translation_sets_get_translation_sets(self, request: operations.TranslationSetsGetTranslationSetsRequest) -> operations.TranslationSetsGetTranslationSetsResponse:
        r"""Get a PagedResponse of TranslationSet objects. Related TranslationSetStrings are NOT returned
        No Documentation Found.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/v2/TranslationSets"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.TranslationSetsGetTranslationSetsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIIPagedResponseGlobalResourcesSharedModelsTranslationSet])
                res.api_i_paged_response_global_resources_shared_models_translation_set_ = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIIPagedResponseGlobalResourcesSharedModelsTranslationSet])
                res.api_i_paged_response_global_resources_shared_models_translation_set_ = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        else:
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out

        return res

    
    def translation_sets_post_translation_set_attribute(self, request: operations.TranslationSetsPostTranslationSetAttributeRequest) -> operations.TranslationSetsPostTranslationSetAttributeResponse:
        r"""Create a TranslationSetAttribute object
        No Documentation Found.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v2/TranslationSets/{ID}/Attributes", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.TranslationSetsPostTranslationSetAttributeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[int])
                res.translation_sets_post_translation_set_attribute_200_application_json_int32_integer = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[int])
                res.translation_sets_post_translation_set_attribute_200_text_json_int32_integer = out
        else:
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out

        return res

    
    def translation_sets_update_translation_set_attribute(self, request: operations.TranslationSetsUpdateTranslationSetAttributeRequest) -> operations.TranslationSetsUpdateTranslationSetAttributeResponse:
        r"""Update a TranslationSetAttribute object
        No Documentation Found.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v2/TranslationSetAttributes/{ID}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.TranslationSetsUpdateTranslationSetAttributeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def update_group_client_relationships_get_subscription(self, request: operations.UpdateGroupClientRelationshipsGetSubscriptionRequest) -> operations.UpdateGroupClientRelationshipsGetSubscriptionResponse:
        r"""Get a subscription by RelationshipID
        No Documentation Found.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v2/UpdateGroupClientRelationships/{RelationshipID}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateGroupClientRelationshipsGetSubscriptionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UpdateSystemModelsUpdateGroupClientRelationship])
                res.update_system_models_update_group_client_relationship = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UpdateSystemModelsUpdateGroupClientRelationship])
                res.update_system_models_update_group_client_relationship = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        else:
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out

        return res

    
    def update_group_client_relationships_get_subscriptions(self, request: operations.UpdateGroupClientRelationshipsGetSubscriptionsRequest) -> operations.UpdateGroupClientRelationshipsGetSubscriptionsResponse:
        r"""Get a list of current Client Subscriptions.
        No Documentation Found.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/v2/UpdateGroupClientRelationships"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateGroupClientRelationshipsGetSubscriptionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIPagedResponseUpdateSystemModelsUpdateGroupClientRelationship])
                res.api_paged_response_update_system_models_update_group_client_relationship_ = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIPagedResponseUpdateSystemModelsUpdateGroupClientRelationship])
                res.api_paged_response_update_system_models_update_group_client_relationship_ = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out

        return res

    
    def update_group_client_relationships_post_subscription(self, request: operations.UpdateGroupClientRelationshipsPostSubscriptionRequest) -> operations.UpdateGroupClientRelationshipsPostSubscriptionResponse:
        r"""Add a subscription
        No Documentation Found.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/v2/UpdateGroupClientRelationships"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateGroupClientRelationshipsPostSubscriptionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.update_group_client_relationships_post_subscription_200_application_json_string = r.content
            if utils.match_content_type(content_type, "application/xml"):
                res.update_group_client_relationships_post_subscription_200_application_xml_string = r.content
            if utils.match_content_type(content_type, "text/json"):
                res.update_group_client_relationships_post_subscription_200_text_json_string = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.update_group_client_relationships_post_subscription_200_text_xml_string = r.content
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def update_group_client_relationships_put_subscription(self, request: operations.UpdateGroupClientRelationshipsPutSubscriptionRequest) -> operations.UpdateGroupClientRelationshipsPutSubscriptionResponse:
        r"""Updates a Subscription
        No Documentation Found.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v2/UpdateGroupClientRelationships/{RelationshipID}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateGroupClientRelationshipsPutSubscriptionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def update_group_client_relationships_put_subscription_by_client_id_update_group_id(self, request: operations.UpdateGroupClientRelationshipsPutSubscriptionByClientIDUpdateGroupIDRequest) -> operations.UpdateGroupClientRelationshipsPutSubscriptionByClientIDUpdateGroupIDResponse:
        r"""DEPRECATED. Set client subscription status for an update group.
        No Documentation Found.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/v2/UpdateGroupClientRelationships"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("PUT", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateGroupClientRelationshipsPutSubscriptionByClientIDUpdateGroupIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def update_group_subscriptions_delete_update_group_subscription(self, request: operations.UpdateGroupSubscriptionsDeleteUpdateGroupSubscriptionRequest) -> operations.UpdateGroupSubscriptionsDeleteUpdateGroupSubscriptionResponse:
        r"""Delete an Update Group Subscription
        No Documentation Found.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v2/UpdateGroupSubscriptions/{UpdateGroupSubscriptionID}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateGroupSubscriptionsDeleteUpdateGroupSubscriptionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def update_group_subscriptions_get_update_group_subscription(self, request: operations.UpdateGroupSubscriptionsGetUpdateGroupSubscriptionRequest) -> operations.UpdateGroupSubscriptionsGetUpdateGroupSubscriptionResponse:
        r"""Get an Update Group Subscription
        No Documentation Found.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v2/UpdateGroupSubscriptions/{UpdateGroupSubscriptionID}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateGroupSubscriptionsGetUpdateGroupSubscriptionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UpdateSystemModelsUpdateGroupSubscription])
                res.update_system_models_update_group_subscription = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UpdateSystemModelsUpdateGroupSubscription])
                res.update_system_models_update_group_subscription = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        else:
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out

        return res

    
    def update_group_subscriptions_get_update_group_subscriptions(self, request: operations.UpdateGroupSubscriptionsGetUpdateGroupSubscriptionsRequest) -> operations.UpdateGroupSubscriptionsGetUpdateGroupSubscriptionsResponse:
        r"""Get Update Group Subscriptions
        No Documentation Found.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/v2/UpdateGroupSubscriptions"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateGroupSubscriptionsGetUpdateGroupSubscriptionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIPagedResponseUpdateSystemModelsUpdateGroupSubscription])
                res.api_paged_response_update_system_models_update_group_subscription_ = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIPagedResponseUpdateSystemModelsUpdateGroupSubscription])
                res.api_paged_response_update_system_models_update_group_subscription_ = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out

        return res

    
    def update_group_subscriptions_post_update_group_subscription(self, request: operations.UpdateGroupSubscriptionsPostUpdateGroupSubscriptionRequest) -> operations.UpdateGroupSubscriptionsPostUpdateGroupSubscriptionResponse:
        r"""Add an Update Group Subscription
        No Documentation Found.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/v2/UpdateGroupSubscriptions"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateGroupSubscriptionsPostUpdateGroupSubscriptionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[int])
                res.update_group_subscriptions_post_update_group_subscription_200_application_json_int32_integer = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[int])
                res.update_group_subscriptions_post_update_group_subscription_200_text_json_int32_integer = out
        else:
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out

        return res

    
    def update_group_subscriptions_put_update_group_subscription(self, request: operations.UpdateGroupSubscriptionsPutUpdateGroupSubscriptionRequest) -> operations.UpdateGroupSubscriptionsPutUpdateGroupSubscriptionResponse:
        r"""Update an Update Group Subscription
        No Documentation Found.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v2/UpdateGroupSubscriptions/{UpdateGroupSubscriptionID}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateGroupSubscriptionsPutUpdateGroupSubscriptionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def update_groups_add_update_group_user(self, request: operations.UpdateGroupsAddUpdateGroupUserRequest) -> operations.UpdateGroupsAddUpdateGroupUserResponse:
        r"""Add an updateGroup that a user can see.
        No Documentation Found.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v2/UpdateGroups/{id}/Users/{userID}", request.path_params)
        
        
        client = self._client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateGroupsAddUpdateGroupUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def update_groups_delete(self, request: operations.UpdateGroupsDeleteRequest) -> operations.UpdateGroupsDeleteResponse:
        r"""Delete an Update Group.
        No Documentation Found.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v2/UpdateGroups/{ID}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateGroupsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def update_groups_get(self, request: operations.UpdateGroupsGetRequest) -> operations.UpdateGroupsGetResponse:
        r"""Get a list of Update Groups.  Update Groups are used by the client to register for a specific type of update.
        No Documentation Found.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/v2/UpdateGroups"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateGroupsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIPagedResponseUpdateSystemModelsUpdateGroup])
                res.api_paged_response_update_system_models_update_group_ = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIPagedResponseUpdateSystemModelsUpdateGroup])
                res.api_paged_response_update_system_models_update_group_ = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out

        return res

    
    def update_groups_get_update_group_bundles(self, request: operations.UpdateGroupsGetUpdateGroupBundlesRequest) -> operations.UpdateGroupsGetUpdateGroupBundlesResponse:
        r"""Get a list of bundles for UpdateGroup.
        No Documentation Found.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v2/UpdateGroups/{ID}/Bundles", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateGroupsGetUpdateGroupBundlesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIPagedResponseUpdateSystemModelsBundle])
                res.api_paged_response_update_system_models_bundle_ = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIPagedResponseUpdateSystemModelsBundle])
                res.api_paged_response_update_system_models_bundle_ = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out

        return res

    
    def update_groups_post(self, request: operations.UpdateGroupsPostRequest) -> operations.UpdateGroupsPostResponse:
        r"""Add a new Update Group.  The report field is a string that has a dot based request for a specific piece of submitted data.
        No Documentation Found.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/v2/UpdateGroups"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateGroupsPostResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.update_groups_post_200_application_json_string = r.content
            if utils.match_content_type(content_type, "application/xml"):
                res.update_groups_post_200_application_xml_string = r.content
            if utils.match_content_type(content_type, "text/json"):
                res.update_groups_post_200_text_json_string = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.update_groups_post_200_text_xml_string = r.content
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def update_groups_put(self, request: operations.UpdateGroupsPutRequest) -> operations.UpdateGroupsPutResponse:
        r"""Modify an Update Group.
        No Documentation Found.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v2/UpdateGroups/{ID}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateGroupsPutResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def update_groups_remove_update_group_user(self, request: operations.UpdateGroupsRemoveUpdateGroupUserRequest) -> operations.UpdateGroupsRemoveUpdateGroupUserResponse:
        r"""Deletes an update group a user could see.
        No Documentation Found.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v2/UpdateGroups/{id}/Users/{userID}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateGroupsRemoveUpdateGroupUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def update_system_get_cached_files(self, request: operations.UpdateSystemGetCachedFilesRequest) -> operations.UpdateSystemGetCachedFilesResponse:
        r"""Get a list of Cached Files installed on the client Machine.
        No Documentation Found.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v2/Clients/{ClientID}/CachedFiles", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateSystemGetCachedFilesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[str]])
                res.update_system_get_cached_files_200_application_json_strings = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[str]])
                res.update_system_get_cached_files_200_text_json_strings = out
        else:
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out

        return res

    
    def update_system_get_checkin(self, request: operations.UpdateSystemGetCheckinRequest) -> operations.UpdateSystemGetCheckinResponse:
        r"""Checks the Client ID into the Update System.
        No Documentation Found.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/v2/UpdateSystem"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateSystemGetCheckinResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UpdateSystemModelsCheckinResult])
                res.update_system_models_checkin_result = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UpdateSystemModelsCheckinResult])
                res.update_system_models_checkin_result = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        else:
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out

        return res

    
    def user_content_definitions_delete_user_content_definition(self, request: operations.UserContentDefinitionsDeleteUserContentDefinitionRequest) -> operations.UserContentDefinitionsDeleteUserContentDefinitionResponse:
        r"""Delete a UserContentDefinition
        Deletes an UserContentDefinition. When successful, the response is empty.  If unsuccessful, an appropriate
                    ApiError is returned.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v2/UserContentDefinitions/{userContentDefinitionID}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.UserContentDefinitionsDeleteUserContentDefinitionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def user_content_definitions_get_user_content_definition(self, request: operations.UserContentDefinitionsGetUserContentDefinitionRequest) -> operations.UserContentDefinitionsGetUserContentDefinitionResponse:
        r"""Get a UserContentDefinition by ID
        Gets a UserContentDefinition by ID. When successful, the response is the requested UserContentDefinition.
                    If unsuccessful, an appropriate ApiError is returned.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v2/UserContentDefinitions/{userContentDefinitionID}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.UserContentDefinitionsGetUserContentDefinitionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ContentSubmissionSharedBusinessEntitiesUserContentDefinition])
                res.content_submission_shared_business_entities_user_content_definition = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ContentSubmissionSharedBusinessEntitiesUserContentDefinition])
                res.content_submission_shared_business_entities_user_content_definition = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        else:
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out

        return res

    
    def user_content_definitions_get_user_content_definitions(self, request: operations.UserContentDefinitionsGetUserContentDefinitionsRequest) -> operations.UserContentDefinitionsGetUserContentDefinitionsResponse:
        r"""Get UserContentDefinitions
        Gets a collection of UserContentDefinitions. When successful, the response is a PagedResponse of UserContentDefinitions.
                    If unsuccessful, an appropriate ApiError is returned.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/v2/UserContentDefinitions"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.UserContentDefinitionsGetUserContentDefinitionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIPagedResponseContentSubmissionSharedBusinessEntitiesUserContentDefinition])
                res.api_paged_response_content_submission_shared_business_entities_user_content_definition_ = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIPagedResponseContentSubmissionSharedBusinessEntitiesUserContentDefinition])
                res.api_paged_response_content_submission_shared_business_entities_user_content_definition_ = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out

        return res

    
    def user_content_definitions_post_user_content_definition(self, request: operations.UserContentDefinitionsPostUserContentDefinitionRequest) -> operations.UserContentDefinitionsPostUserContentDefinitionResponse:
        r"""Create a UserContentDefinition
        Creates a UserContentDefinition.  The body of the POST is the UserContentDefinition to create.
                    The UserContentDefinitionID will be assigned on creation of the Job.  When successful, the response
                    is the UserContentDefinitionID.  If unsuccessful, an appropriate ApiError is returned.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/v2/UserContentDefinitions"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UserContentDefinitionsPostUserContentDefinitionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[int])
                res.user_content_definitions_post_user_content_definition_200_application_json_int32_integer = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[int])
                res.user_content_definitions_post_user_content_definition_200_text_json_int32_integer = out
        else:
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out

        return res

    
    def user_permissions_get_current_user_roles(self, request: operations.UserPermissionsGetCurrentUserRolesRequest) -> operations.UserPermissionsGetCurrentUserRolesResponse:
        r"""Gets the current user's roles
        No Documentation Found.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/v2/Users/Current/Roles"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.UserPermissionsGetCurrentUserRolesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIPagedResponseAPIModelsRole])
                res.api_paged_response_api_models_role_ = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIPagedResponseAPIModelsRole])
                res.api_paged_response_api_models_role_ = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out

        return res

    
    def user_permissions_get_permissions(self, request: operations.UserPermissionsGetPermissionsRequest) -> operations.UserPermissionsGetPermissionsResponse:
        r"""Get a user's permissions
        No Documentation Found.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v2/Users/{id}/Permissions", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.UserPermissionsGetPermissionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIPagedResponseAPIModelsUserEffectivePermission])
                res.api_paged_response_api_models_user_effective_permission_ = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIPagedResponseAPIModelsUserEffectivePermission])
                res.api_paged_response_api_models_user_effective_permission_ = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out

        return res

    
    def user_permissions_get_roles(self, request: operations.UserPermissionsGetRolesRequest) -> operations.UserPermissionsGetRolesResponse:
        r"""Get a user's roles
        No Documentation Found.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v2/Users/{id}/Roles", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.UserPermissionsGetRolesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIPagedResponseAPIModelsRole])
                res.api_paged_response_api_models_role_ = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIPagedResponseAPIModelsRole])
                res.api_paged_response_api_models_role_ = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out

        return res

    
    def user_permissions_get_users(self, request: operations.UserPermissionsGetUsersRequest) -> operations.UserPermissionsGetUsersResponse:
        r"""Get all user's in a role
        No Documentation Found.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v2/Roles/{id}/Users", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.UserPermissionsGetUsersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIPagedResponseAPIModelsUser])
                res.api_paged_response_api_models_user_ = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIPagedResponseAPIModelsUser])
                res.api_paged_response_api_models_user_ = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsAPIError])
                res.api_models_api_error = out

        return res

    
    def users_delete(self, request: operations.UsersDeleteRequest) -> operations.UsersDeleteResponse:
        r"""Delete a user
        No Documentation Found.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v2/Users/{id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.UsersDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def users_get(self, request: operations.UsersGetRequest) -> operations.UsersGetResponse:
        r"""Get users
        No Documentation Found.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/v2/Users"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.UsersGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIPagedResponseAPIModelsUser])
                res.api_paged_response_api_models_user_ = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIPagedResponseAPIModelsUser])
                res.api_paged_response_api_models_user_ = out

        return res

    
    def users_get_current_user(self) -> operations.UsersGetCurrentUserResponse:
        r"""Gets the current user
        No Documentation Found.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/v2/Users/Current"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.UsersGetCurrentUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsUser])
                res.api_models_user = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsUser])
                res.api_models_user = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def users_post(self, request: operations.UsersPostRequest) -> operations.UsersPostResponse:
        r"""Create a user
        No Documentation Found.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/v2/Users"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UsersPostResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsUser])
                res.api_models_user = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIModelsUser])
                res.api_models_user = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def users_put(self, request: operations.UsersPutRequest) -> operations.UsersPutResponse:
        r"""Update a user
        No Documentation Found.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v2/Users/{id}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UsersPutResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def users_put_current_user(self, request: operations.UsersPutCurrentUserRequest) -> operations.UsersPutCurrentUserResponse:
        r"""Update a user
        No Documentation Found.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/v2/Users/Current"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UsersPutCurrentUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def voucher_history_get_voucher_history(self, request: operations.VoucherHistoryGetVoucherHistoryRequest) -> operations.VoucherHistoryGetVoucherHistoryResponse:
        r"""Gets voucher history data
        No Documentation Found.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/v2/VoucherHistory"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.VoucherHistoryGetVoucherHistoryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIPagedResponseDealerDbModelsVoucherHistory])
                res.api_paged_response_dealer_db_models_voucher_history_ = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIPagedResponseDealerDbModelsVoucherHistory])
                res.api_paged_response_dealer_db_models_voucher_history_ = out

        return res

    
    def vouchers_delete(self, request: operations.VouchersDeleteRequest) -> operations.VouchersDeleteResponse:
        r"""Delete a voucher
        No Documentation Found.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v2/Vouchers/{VoucherCode}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.VouchersDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def vouchers_get(self, request: operations.VouchersGetRequest) -> operations.VouchersGetResponse:
        r"""Gets a list of vouchers
        No Documentation Found.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/v2/Vouchers"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.VouchersGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIPagedResponseDealerDbModelsVoucher])
                res.api_paged_response_dealer_db_models_voucher_ = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIPagedResponseDealerDbModelsVoucher])
                res.api_paged_response_dealer_db_models_voucher_ = out

        return res

    
    def vouchers_get_voucher_history(self, request: operations.VouchersGetVoucherHistoryRequest) -> operations.VouchersGetVoucherHistoryResponse:
        r"""Get a voucher's history.
        No Documentation Found.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v2/Vouchers/{VoucherCode}/VoucherHistory", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.VouchersGetVoucherHistoryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIPagedResponseDealerDbModelsVoucherHistory])
                res.api_paged_response_dealer_db_models_voucher_history_ = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIPagedResponseDealerDbModelsVoucherHistory])
                res.api_paged_response_dealer_db_models_voucher_history_ = out

        return res

    
    def vouchers_post(self, request: operations.VouchersPostRequest) -> operations.VouchersPostResponse:
        r"""Create a voucher
        No Documentation Found.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/v2/Vouchers"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.VouchersPostResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.vouchers_post_200_application_json_string = r.content
            if utils.match_content_type(content_type, "application/xml"):
                res.vouchers_post_200_application_xml_string = r.content
            if utils.match_content_type(content_type, "text/json"):
                res.vouchers_post_200_text_json_string = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.vouchers_post_200_text_xml_string = r.content

        return res

    
    def vouchers_put(self, request: operations.VouchersPutRequest) -> operations.VouchersPutResponse:
        r"""Update a voucher
        No Documentation Found.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/v2/Vouchers/{VoucherCode}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.VouchersPutResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    