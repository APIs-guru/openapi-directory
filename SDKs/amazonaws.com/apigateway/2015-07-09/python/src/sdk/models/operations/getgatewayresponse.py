from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
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
    response_type: GetGatewayResponseResponseTypeEnum = field(metadata={'path_param': { 'field_name': 'response_type', 'style': 'simple', 'explode': False }})
    restapi_id: str = field(metadata={'path_param': { 'field_name': 'restapi_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetGatewayResponseHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetGatewayResponseRequest:
    headers: GetGatewayResponseHeaders = field()
    path_params: GetGatewayResponsePathParams = field()
    

@dataclass
class GetGatewayResponseResponse:
    content_type: str = field()
    status_code: int = field()
    bad_request_exception: Optional[Any] = field(default=None)
    gateway_response: Optional[shared.GatewayResponse] = field(default=None)
    not_found_exception: Optional[Any] = field(default=None)
    too_many_requests_exception: Optional[Any] = field(default=None)
    unauthorized_exception: Optional[Any] = field(default=None)
    
