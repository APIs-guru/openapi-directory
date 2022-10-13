from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetVaultItemByIDPathParams:
    item_uuid: str = field(default=None, metadata={'path_param': { 'field_name': 'itemUuid', 'style': 'simple', 'explode': False }})
    vault_uuid: str = field(default=None, metadata={'path_param': { 'field_name': 'vaultUuid', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetVaultItemByIDSecurity:
    connect_token: shared.SchemeConnectToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetVaultItemByIDRequest:
    path_params: GetVaultItemByIDPathParams = field(default=None)
    security: GetVaultItemByIDSecurity = field(default=None)
    

@dataclass
class GetVaultItemByIDResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    full_item: Optional[shared.FullItem] = field(default=None)
    status_code: int = field(default=None)
    
