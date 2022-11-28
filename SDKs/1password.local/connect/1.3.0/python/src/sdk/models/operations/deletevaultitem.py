from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteVaultItemPathParams:
    item_uuid: str = field(metadata={'path_param': { 'field_name': 'itemUuid', 'style': 'simple', 'explode': False }})
    vault_uuid: str = field(metadata={'path_param': { 'field_name': 'vaultUuid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteVaultItemSecurity:
    connect_token: shared.SchemeConnectToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class DeleteVaultItemRequest:
    path_params: DeleteVaultItemPathParams = field()
    security: DeleteVaultItemSecurity = field()
    

@dataclass
class DeleteVaultItemResponse:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    
