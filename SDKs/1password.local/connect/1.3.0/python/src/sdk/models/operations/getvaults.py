from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetVaultsQueryParams:
    filter: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    

@dataclass
class GetVaultsSecurity:
    connect_token: shared.SchemeConnectToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetVaultsRequest:
    query_params: GetVaultsQueryParams = field()
    security: GetVaultsSecurity = field()
    

@dataclass
class GetVaultsResponse:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    vaults: Optional[List[shared.Vault]] = field(default=None)
    
