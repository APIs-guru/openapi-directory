from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CreateVaultItemPathParams:
    vault_uuid: str = field(default=None, metadata={'path_param': { 'field_name': 'vaultUuid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateVaultItemSecurity:
    connect_token: shared.SchemeConnectToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class CreateVaultItemRequest:
    path_params: CreateVaultItemPathParams = field(default=None)
    request: Optional[shared.FullItem] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: CreateVaultItemSecurity = field(default=None)
    

@dataclass
class CreateVaultItemResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    full_item: Optional[shared.FullItem] = field(default=None)
    status_code: int = field(default=None)
    
