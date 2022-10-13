from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class RemoveCustomRoutingEndpointsXAmzTargetEnum(str, Enum):
    GLOBAL_ACCELERATOR_V20180706_REMOVE_CUSTOM_ROUTING_ENDPOINTS = "GlobalAccelerator_V20180706.RemoveCustomRoutingEndpoints"


@dataclass
class RemoveCustomRoutingEndpointsHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: RemoveCustomRoutingEndpointsXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class RemoveCustomRoutingEndpointsRequest:
    headers: RemoveCustomRoutingEndpointsHeaders = field(default=None)
    request: shared.RemoveCustomRoutingEndpointsRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class RemoveCustomRoutingEndpointsResponse:
    access_denied_exception: Optional[Any] = field(default=None)
    conflict_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    endpoint_group_not_found_exception: Optional[Any] = field(default=None)
    endpoint_not_found_exception: Optional[Any] = field(default=None)
    internal_service_error_exception: Optional[Any] = field(default=None)
    invalid_argument_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
