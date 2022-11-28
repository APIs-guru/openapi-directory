from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CreateVaultItemPathParams:
    vault_uuid: str = field(metadata={'path_param': { 'field_name': 'vaultUuid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateVaultItemSecurity:
    connect_token: shared.SchemeConnectToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class CreateVaultItemRequest:
    path_params: CreateVaultItemPathParams = field()
    security: CreateVaultItemSecurity = field()
    request: Optional[shared.FullItemInput] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateVaultItemResponse:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    full_item: Optional[shared.FullItem] = field(default=None)
    
