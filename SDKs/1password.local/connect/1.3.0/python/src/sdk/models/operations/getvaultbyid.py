from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetVaultByIDPathParams:
    vault_uuid: str = field(default=None, metadata={'path_param': { 'field_name': 'vaultUuid', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetVaultByIDSecurity:
    connect_token: shared.SchemeConnectToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetVaultByIDRequest:
    path_params: GetVaultByIDPathParams = field(default=None)
    security: GetVaultByIDSecurity = field(default=None)
    

@dataclass
class GetVaultByIDResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    status_code: int = field(default=None)
    vault: Optional[shared.Vault] = field(default=None)
    
