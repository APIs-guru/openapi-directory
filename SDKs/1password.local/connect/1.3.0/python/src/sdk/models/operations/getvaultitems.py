from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetVaultItemsPathParams:
    vault_uuid: str = field(default=None, metadata={'path_param': { 'field_name': 'vaultUuid', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetVaultItemsQueryParams:
    filter: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    

@dataclass
class GetVaultItemsSecurity:
    connect_token: shared.SchemeConnectToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetVaultItemsRequest:
    path_params: GetVaultItemsPathParams = field(default=None)
    query_params: GetVaultItemsQueryParams = field(default=None)
    security: GetVaultItemsSecurity = field(default=None)
    

@dataclass
class GetVaultItemsResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    items: Optional[List[shared.Item]] = field(default=None)
    status_code: int = field(default=None)
    
