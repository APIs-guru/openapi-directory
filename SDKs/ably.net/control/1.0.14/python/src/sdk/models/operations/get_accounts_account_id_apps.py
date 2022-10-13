from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetAccountsAccountIDAppsPathParams:
    account_id: str = field(default=None, metadata={'path_param': { 'field_name': 'account_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAccountsAccountIDAppsSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetAccountsAccountIDAppsRequest:
    path_params: GetAccountsAccountIDAppsPathParams = field(default=None)
    security: GetAccountsAccountIDAppsSecurity = field(default=None)
    

@dataclass
class GetAccountsAccountIDAppsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    app_responses: Optional[List[shared.AppResponse]] = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    
