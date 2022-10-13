from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class ExpireSessionXAmzTargetEnum(str, Enum):
    PHOTON_ADMIN_PROXY_SERVICE_EXPIRE_SESSION = "PhotonAdminProxyService.ExpireSession"


@dataclass
class ExpireSessionHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: ExpireSessionXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class ExpireSessionRequest:
    headers: ExpireSessionHeaders = field(default=None)
    request: shared.ExpireSessionRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ExpireSessionResponse:
    content_type: str = field(default=None)
    expire_session_result: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
