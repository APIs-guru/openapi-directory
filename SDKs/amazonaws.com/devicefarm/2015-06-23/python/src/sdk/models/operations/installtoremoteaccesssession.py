from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class InstallToRemoteAccessSessionXAmzTargetEnum(str, Enum):
    DEVICE_FARM_20150623_INSTALL_TO_REMOTE_ACCESS_SESSION = "DeviceFarm_20150623.InstallToRemoteAccessSession"


@dataclass
class InstallToRemoteAccessSessionHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: InstallToRemoteAccessSessionXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class InstallToRemoteAccessSessionRequest:
    headers: InstallToRemoteAccessSessionHeaders = field(default=None)
    request: shared.InstallToRemoteAccessSessionRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class InstallToRemoteAccessSessionResponse:
    argument_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    install_to_remote_access_session_result: Optional[shared.InstallToRemoteAccessSessionResult] = field(default=None)
    limit_exceeded_exception: Optional[Any] = field(default=None)
    not_found_exception: Optional[Any] = field(default=None)
    service_account_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
