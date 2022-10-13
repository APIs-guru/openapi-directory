import warnings
import requests
from typing import Any,Optional
from sdk.models import operations
from . import utils


SERVERS = [
	"https://checkout-test.adyen.com/v1",
]


class SDK:
    client = requests.Session()
    server_url = SERVERS[0]

    def config_server_url(self, server_url: str, params: dict[str, str]):
        if not params is None:
            self.server_url = utils.replace_parameters(server_url, params)
        else:
            self.server_url = server_url
    
    
    def post_origin_keys(self, request: operations.PostOriginKeysRequest) -> operations.PostOriginKeysResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/originKeys"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostOriginKeysResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.checkout_utility_response = out
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

    