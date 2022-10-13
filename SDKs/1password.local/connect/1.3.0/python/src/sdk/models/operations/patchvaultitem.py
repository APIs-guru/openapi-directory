from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class PatchVaultItemPathParams:
    item_uuid: str = field(default=None, metadata={'path_param': { 'field_name': 'itemUuid', 'style': 'simple', 'explode': False }})
    vault_uuid: str = field(default=None, metadata={'path_param': { 'field_name': 'vaultUuid', 'style': 'simple', 'explode': False }})
    

@dataclass
class PatchVaultItemSecurity:
    connect_token: shared.SchemeConnectToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class PatchVaultItemRequest:
    path_params: PatchVaultItemPathParams = field(default=None)
    request: Optional[List[shared.Patch]] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: PatchVaultItemSecurity = field(default=None)
    

@dataclass
class PatchVaultItemResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    full_item: Optional[shared.FullItem] = field(default=None)
    status_code: int = field(default=None)
    
