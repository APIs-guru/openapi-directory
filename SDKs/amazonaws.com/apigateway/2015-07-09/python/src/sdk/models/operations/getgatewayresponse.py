from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class GetGatewayResponseResponseTypeEnum(str, Enum):
    DEFAULT_4_XX = "DEFAULT_4XX"
    DEFAULT_5_XX = "DEFAULT_5XX"
    RESOURCE_NOT_FOUND = "RESOURCE_NOT_FOUND"
    UNAUTHORIZED = "UNAUTHORIZED"
    INVALID_API_KEY = "INVALID_API_KEY"
    ACCESS_DENIED = "ACCESS_DENIED"
    AUTHORIZER_FAILURE = "AUTHORIZER_FAILURE"
    AUTHORIZER_CONFIGURATION_ERROR = "AUTHORIZER_CONFIGURATION_ERROR"
    INVALID_SIGNATURE = "INVALID_SIGNATURE"
    EXPIRED_TOKEN = "EXPIRED_TOKEN"
    MISSING_AUTHENTICATION_TOKEN = "MISSING_AUTHENTICATION_TOKEN"
    INTEGRATION_FAILURE = "INTEGRATION_FAILURE"
    INTEGRATION_TIMEOUT = "INTEGRATION_TIMEOUT"
    API_CONFIGURATION_ERROR = "API_CONFIGURATION_ERROR"
    UNSUPPORTED_MEDIA_TYPE = "UNSUPPORTED_MEDIA_TYPE"
    BAD_REQUEST_PARAMETERS = "BAD_REQUEST_PARAMETERS"
    BAD_REQUEST_BODY = "BAD_REQUEST_BODY"
    REQUEST_TOO_LARGE = "REQUEST_TOO_LARGE"
    THROTTLED = "THROTTLED"
    QUOTA_EXCEEDED = "QUOTA_EXCEEDED"
    WAF_FILTERED = "WAF_FILTERED"


@dataclass
class GetGatewayResponsePathParams:
    response_type: GetGatewayResponseResponseTypeEnum = field(default=None, metadata={'path_param': { 'field_name': 'response_type', 'style': 'simple', 'explode': False }})
    restapi_id: str = field(default=None, metadata={'path_param': { 'field_name': 'restapi_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetGatewayResponseHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass
class GetGatewayResponseRequest:
    path_params: GetGatewayResponsePathParams = field(default=None)
    headers: GetGatewayResponseHeaders = field(default=None)
    

@dataclass
class GetGatewayResponseResponse:
    bad_request_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    gateway_response: Optional[shared.GatewayResponse] = field(default=None)
    not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    too_many_requests_exception: Optional[Any] = field(default=None)
    unauthorized_exception: Optional[Any] = field(default=None)
    
