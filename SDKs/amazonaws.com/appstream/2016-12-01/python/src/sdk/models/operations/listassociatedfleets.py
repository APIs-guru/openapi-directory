from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared

class ListAssociatedFleetsXAmzTargetEnum(str, Enum):
    PHOTON_ADMIN_PROXY_SERVICE_LIST_ASSOCIATED_FLEETS = "PhotonAdminProxyService.ListAssociatedFleets"


@dataclass
class ListAssociatedFleetsHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: ListAssociatedFleetsXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListAssociatedFleetsRequest:
    headers: ListAssociatedFleetsHeaders = field(default=None)
    request: shared.ListAssociatedFleetsRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ListAssociatedFleetsResponse:
    content_type: str = field(default=None)
    list_associated_fleets_result: Optional[shared.ListAssociatedFleetsResult] = field(default=None)
    status_code: int = field(default=None)
    
