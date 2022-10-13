from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class UnshareDirectoryXAmzTargetEnum(str, Enum):
    DIRECTORY_SERVICE_20150416_UNSHARE_DIRECTORY = "DirectoryService_20150416.UnshareDirectory"


@dataclass
class UnshareDirectoryHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: UnshareDirectoryXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class UnshareDirectoryRequest:
    headers: UnshareDirectoryHeaders = field(default=None)
    request: shared.UnshareDirectoryRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UnshareDirectoryResponse:
    client_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    directory_not_shared_exception: Optional[Any] = field(default=None)
    entity_does_not_exist_exception: Optional[Any] = field(default=None)
    invalid_target_exception: Optional[Any] = field(default=None)
    service_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    unshare_directory_result: Optional[shared.UnshareDirectoryResult] = field(default=None)
    
