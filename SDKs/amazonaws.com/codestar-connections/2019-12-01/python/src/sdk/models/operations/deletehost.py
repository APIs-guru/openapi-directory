from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class DeleteHostXAmzTargetEnum(str, Enum):
    COM_AMAZONAWS_CODESTAR_CONNECTIONS_CODE_STAR_CONNECTIONS_20191201_DELETE_HOST = "com.amazonaws.codestar.connections.CodeStar_connections_20191201.DeleteHost"


@dataclass
class DeleteHostHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: DeleteHostXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class DeleteHostRequest:
    headers: DeleteHostHeaders = field(default=None)
    request: shared.DeleteHostInput = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DeleteHostResponse:
    content_type: str = field(default=None)
    delete_host_output: Optional[dict[str, Any]] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    resource_unavailable_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
