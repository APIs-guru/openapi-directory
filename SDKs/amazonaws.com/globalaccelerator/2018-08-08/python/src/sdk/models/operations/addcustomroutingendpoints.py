from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class AddCustomRoutingEndpointsXAmzTargetEnum(str, Enum):
    GLOBAL_ACCELERATOR_V20180706_ADD_CUSTOM_ROUTING_ENDPOINTS = "GlobalAccelerator_V20180706.AddCustomRoutingEndpoints"


@dataclass
class AddCustomRoutingEndpointsHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: AddCustomRoutingEndpointsXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class AddCustomRoutingEndpointsRequest:
    headers: AddCustomRoutingEndpointsHeaders = field(default=None)
    request: shared.AddCustomRoutingEndpointsRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class AddCustomRoutingEndpointsResponse:
    access_denied_exception: Optional[Any] = field(default=None)
    add_custom_routing_endpoints_response: Optional[shared.AddCustomRoutingEndpointsResponse] = field(default=None)
    conflict_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    endpoint_already_exists_exception: Optional[Any] = field(default=None)
    endpoint_group_not_found_exception: Optional[Any] = field(default=None)
    internal_service_error_exception: Optional[Any] = field(default=None)
    invalid_argument_exception: Optional[Any] = field(default=None)
    limit_exceeded_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
