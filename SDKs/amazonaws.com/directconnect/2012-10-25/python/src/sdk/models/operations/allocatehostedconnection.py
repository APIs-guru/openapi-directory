from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class AllocateHostedConnectionXAmzTargetEnum(str, Enum):
    OVERTURE_SERVICE_ALLOCATE_HOSTED_CONNECTION = "OvertureService.AllocateHostedConnection"


@dataclass
class AllocateHostedConnectionHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: AllocateHostedConnectionXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class AllocateHostedConnectionRequest:
    headers: AllocateHostedConnectionHeaders = field(default=None)
    request: shared.AllocateHostedConnectionRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class AllocateHostedConnectionResponse:
    connection: Optional[shared.Connection] = field(default=None)
    content_type: str = field(default=None)
    direct_connect_client_exception: Optional[Any] = field(default=None)
    direct_connect_server_exception: Optional[Any] = field(default=None)
    duplicate_tag_keys_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    too_many_tags_exception: Optional[Any] = field(default=None)
    
