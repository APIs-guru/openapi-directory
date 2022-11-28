from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class UpdateVaultItemPathParams:
    item_uuid: str = field(metadata={'path_param': { 'field_name': 'itemUuid', 'style': 'simple', 'explode': False }})
    vault_uuid: str = field(metadata={'path_param': { 'field_name': 'vaultUuid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateVaultItemSecurity:
    connect_token: shared.SchemeConnectToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class UpdateVaultItemRequest:
    path_params: UpdateVaultItemPathParams = field()
    security: UpdateVaultItemSecurity = field()
    request: Optional[shared.FullItemInput] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateVaultItemResponse:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    full_item: Optional[shared.FullItem] = field(default=None)
    
