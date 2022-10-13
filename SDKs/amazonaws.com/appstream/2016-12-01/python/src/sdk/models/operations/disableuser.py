from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class DisableUserXAmzTargetEnum(str, Enum):
    PHOTON_ADMIN_PROXY_SERVICE_DISABLE_USER = "PhotonAdminProxyService.DisableUser"


@dataclass
class DisableUserHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: DisableUserXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class DisableUserRequest:
    headers: DisableUserHeaders = field(default=None)
    request: shared.DisableUserRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DisableUserResponse:
    content_type: str = field(default=None)
    disable_user_result: Optional[dict[str, Any]] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
