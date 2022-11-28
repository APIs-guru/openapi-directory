

import requests
from typing import Any,Optional
from sdk.models import operations
from . import utils




SERVERS = [
	"https://pal-test.adyen.com/pal/servlet/Recurring/v18",
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
        
    
    
    
    def post_disable(self, request: operations.PostDisableRequest) -> operations.PostDisableResponse:
        r"""Disables stored payment details.
        Disables stored payment details to stop charging a shopper with this particular recurring detail ID.
        
        For more information, refer to [Disable stored details](https://docs.adyen.com/developers/features/recurring-payments/disable-stored-details).
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/disable"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostDisableResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.disable_result = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 422:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def post_list_recurring_details(self, request: operations.PostListRecurringDetailsRequest) -> operations.PostListRecurringDetailsResponse:
        r"""Retrieves stored payment details for a shopper.
        Lists the stored payment details for a shopper, if there are any available. The recurring detail ID can be used with a regular authorisation request to charge the shopper. A summary of the payment detail is returned for presentation to the shopper.
        
        For more information, refer to [Retrieve stored details](https://docs.adyen.com/developers/features/recurring-payments/retrieve-stored-details).
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/listRecurringDetails"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostListRecurringDetailsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.recurring_details_result = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 422:
            pass
        elif r.status_code == 500:
            pass

        return res

    