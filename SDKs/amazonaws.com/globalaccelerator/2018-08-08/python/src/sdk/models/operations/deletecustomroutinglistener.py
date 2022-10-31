from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from sdk.models import shared

class DeleteCustomRoutingListenerXAmzTargetEnum(str, Enum):
    GLOBAL_ACCELERATOR_V20180706_DELETE_CUSTOM_ROUTING_LISTENER = "GlobalAccelerator_V20180706.DeleteCustomRoutingListener"


@dataclass
class DeleteCustomRoutingListenerHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: DeleteCustomRoutingListenerXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteCustomRoutingListenerRequest:
    headers: DeleteCustomRoutingListenerHeaders = field(default=None)
    request: shared.DeleteCustomRoutingListenerRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DeleteCustomRoutingListenerResponse:
    associated_endpoint_group_found_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    internal_service_error_exception: Optional[Any] = field(default=None)
    invalid_argument_exception: Optional[Any] = field(default=None)
    listener_not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
