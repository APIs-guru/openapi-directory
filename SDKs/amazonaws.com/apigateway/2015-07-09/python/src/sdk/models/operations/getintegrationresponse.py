from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetIntegrationResponsePathParams:
    http_method: str = field(default=None, metadata={'path_param': { 'field_name': 'http_method', 'style': 'simple', 'explode': False }})
    resource_id: str = field(default=None, metadata={'path_param': { 'field_name': 'resource_id', 'style': 'simple', 'explode': False }})
    restapi_id: str = field(default=None, metadata={'path_param': { 'field_name': 'restapi_id', 'style': 'simple', 'explode': False }})
    status_code: str = field(default=None, metadata={'path_param': { 'field_name': 'status_code', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetIntegrationResponseHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetIntegrationResponseRequest:
    path_params: GetIntegrationResponsePathParams = field(default=None)
    headers: GetIntegrationResponseHeaders = field(default=None)
    

@dataclass
class GetIntegrationResponseResponse:
    bad_request_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    integration_response: Optional[shared.IntegrationResponse] = field(default=None)
    not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    too_many_requests_exception: Optional[Any] = field(default=None)
    unauthorized_exception: Optional[Any] = field(default=None)
    
