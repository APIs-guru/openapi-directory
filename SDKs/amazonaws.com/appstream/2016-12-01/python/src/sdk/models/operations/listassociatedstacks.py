from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared

class ListAssociatedStacksXAmzTargetEnum(str, Enum):
    PHOTON_ADMIN_PROXY_SERVICE_LIST_ASSOCIATED_STACKS = "PhotonAdminProxyService.ListAssociatedStacks"


@dataclass
class ListAssociatedStacksHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: ListAssociatedStacksXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class ListAssociatedStacksRequest:
    headers: ListAssociatedStacksHeaders = field(default=None)
    request: shared.ListAssociatedStacksRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ListAssociatedStacksResponse:
    content_type: str = field(default=None)
    list_associated_stacks_result: Optional[shared.ListAssociatedStacksResult] = field(default=None)
    status_code: int = field(default=None)
    
