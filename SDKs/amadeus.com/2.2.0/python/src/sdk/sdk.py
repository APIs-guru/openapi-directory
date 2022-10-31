import warnings
import requests
from typing import Any,Optional
from sdk.models import operations
from . import utils


SERVERS = [
	"https://test.api.amadeus.com/v2",
]


class SDK:
    client = requests.Session()
    server_url = SERVERS[0]

    def config_server_url(self, server_url: str, params: dict[str, str]):
        if not params is None:
            self.server_url = utils.replace_parameters(server_url, params)
        else:
            self.server_url = server_url
            
    

    
    def get_flight_offers(self, request: operations.GetFlightOffersRequest) -> operations.GetFlightOffersResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/shopping/flight-offers"

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetFlightOffersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/vnd.amadeus+json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.success = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/vnd.amadeus+json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.error_400 = out
        else:
            if utils.match_content_type(content_type, "application/vnd.amadeus+json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.error_500 = out

        return res

    
    def search_flight_offers(self, request: operations.SearchFlightOffersRequest) -> operations.SearchFlightOffersResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/shopping/flight-offers"

        headers = utils.get_headers(request.headers)

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        if data is None and form is None:
           raise Exception('request body is required')

        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchFlightOffersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/vnd.amadeus+json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.success = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/vnd.amadeus+json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.error_400 = out
        else:
            if utils.match_content_type(content_type, "application/vnd.amadeus+json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.error_500 = out

        return res

    