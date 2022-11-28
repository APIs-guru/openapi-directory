

import requests
from typing import Any,Optional
from sdk.models import operations
from . import utils




SERVERS = [
	"https://pal-test.adyen.com/pal/servlet/BinLookup/v40",
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
        
    
    
    
    def post_get3ds_availability(self, request: operations.PostGet3dsAvailabilityRequest) -> operations.PostGet3dsAvailabilityResponse:
        r"""Checks 3D Secure availability.
        Verifies whether 3D Secure is available for the specified BIN or card brand. For 3D Secure 2, this endpoint also returns device fingerprinting keys.
        
        For more information, refer to [3D Secure 2](https://docs.adyen.com/online-payments/3d-secure/native-3ds2).
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/get3dsAvailability"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostGet3dsAvailabilityResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.three_ds_availability_response = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.service_error = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.service_error = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.service_error = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.service_error = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.service_error = out

        return res

    
    def post_get_cost_estimate(self, request: operations.PostGetCostEstimateRequest) -> operations.PostGetCostEstimateResponse:
        r"""Gets a cost estimate.
        Use the Adyen Cost Estimation API to pre-calculate interchange and scheme fee costs. Knowing these costs prior actual payment authorisation gives you an opportunity to charge those costs to the cardholder, if necessary.
        
        To retrieve this information, make the call to the `/getCostEstimate` endpoint. The response to this call contains the amount of the interchange and scheme fees charged by the network for this transaction, and also which surcharging policy is possible (based on current regulations).
        
        > Since not all information is known in advance (for example, if the cardholder will successfully authenticate via 3D Secure or if you also plan to provide additional Level 2/3 data), the returned amounts are based on a set of assumption criteria you define in the `assumptions` parameter.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/getCostEstimate"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostGetCostEstimateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.cost_estimate_response = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.service_error = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.service_error = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.service_error = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.service_error = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.service_error = out

        return res

    