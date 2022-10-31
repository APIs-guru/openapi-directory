from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class DisassociateMacSecKeyXAmzTargetEnum(str, Enum):
    OVERTURE_SERVICE_DISASSOCIATE_MAC_SEC_KEY = "OvertureService.DisassociateMacSecKey"


@dataclass
class DisassociateMacSecKeyHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: DisassociateMacSecKeyXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class DisassociateMacSecKeyRequest:
    headers: DisassociateMacSecKeyHeaders = field(default=None)
    request: shared.DisassociateMacSecKeyRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DisassociateMacSecKeyResponse:
    content_type: str = field(default=None)
    direct_connect_client_exception: Optional[Any] = field(default=None)
    direct_connect_server_exception: Optional[Any] = field(default=None)
    disassociate_mac_sec_key_response: Optional[shared.DisassociateMacSecKeyResponse] = field(default=None)
    status_code: int = field(default=None)
    
