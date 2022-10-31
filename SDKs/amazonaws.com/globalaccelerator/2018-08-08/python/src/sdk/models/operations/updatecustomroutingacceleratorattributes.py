from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class UpdateCustomRoutingAcceleratorAttributesXAmzTargetEnum(str, Enum):
    GLOBAL_ACCELERATOR_V20180706_UPDATE_CUSTOM_ROUTING_ACCELERATOR_ATTRIBUTES = "GlobalAccelerator_V20180706.UpdateCustomRoutingAcceleratorAttributes"


@dataclass
class UpdateCustomRoutingAcceleratorAttributesHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: UpdateCustomRoutingAcceleratorAttributesXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateCustomRoutingAcceleratorAttributesRequest:
    headers: UpdateCustomRoutingAcceleratorAttributesHeaders = field(default=None)
    request: shared.UpdateCustomRoutingAcceleratorAttributesRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateCustomRoutingAcceleratorAttributesResponse:
    accelerator_not_found_exception: Optional[Any] = field(default=None)
    access_denied_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    internal_service_error_exception: Optional[Any] = field(default=None)
    invalid_argument_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    update_custom_routing_accelerator_attributes_response: Optional[shared.UpdateCustomRoutingAcceleratorAttributesResponse] = field(default=None)
    
