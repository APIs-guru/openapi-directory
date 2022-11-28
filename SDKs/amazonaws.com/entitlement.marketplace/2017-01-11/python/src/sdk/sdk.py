
__doc__ = """ SDK Documentation: https://docs.aws.amazon.com/marketplace/ - Amazon Web Services documentation"""
import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils




SERVERS = [
	"http://entitlement.marketplace.{region}.amazonaws.com",
	"https://entitlement.marketplace.{region}.amazonaws.com",
	"http://entitlement.marketplace.{region}.amazonaws.com.cn",
	"https://entitlement.marketplace.{region}.amazonaws.com.cn",
]


class SDK:
    r"""SDK Documentation: https://docs.aws.amazon.com/marketplace/ - Amazon Web Services documentation"""

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
        
    
    
    
    def get_entitlements(self, request: operations.GetEntitlementsRequest) -> operations.GetEntitlementsResponse:
        r"""GetEntitlements retrieves entitlement values for a given product. The results can be filtered based on customer identifier or product dimensions.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/#X-Amz-Target=AWSMPEntitlementService.GetEntitlements"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetEntitlementsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetEntitlementsResult])
                res.get_entitlements_result = out
        elif r.status_code == 480:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.InvalidParameterException])
                res.invalid_parameter_exception = out
        elif r.status_code == 481:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ThrottlingException])
                res.throttling_exception = out
        elif r.status_code == 482:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.InternalServiceErrorException])
                res.internal_service_error_exception = out

        return res

    