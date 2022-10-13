from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class UpdateVirtualInterfaceAttributesXAmzTargetEnum(str, Enum):
    OVERTURE_SERVICE_UPDATE_VIRTUAL_INTERFACE_ATTRIBUTES = "OvertureService.UpdateVirtualInterfaceAttributes"


@dataclass
class UpdateVirtualInterfaceAttributesHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: UpdateVirtualInterfaceAttributesXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class UpdateVirtualInterfaceAttributesRequest:
    headers: UpdateVirtualInterfaceAttributesHeaders = field(default=None)
    request: shared.UpdateVirtualInterfaceAttributesRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateVirtualInterfaceAttributesResponse:
    content_type: str = field(default=None)
    direct_connect_client_exception: Optional[Any] = field(default=None)
    direct_connect_server_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    virtual_interface: Optional[shared.VirtualInterface] = field(default=None)
    
