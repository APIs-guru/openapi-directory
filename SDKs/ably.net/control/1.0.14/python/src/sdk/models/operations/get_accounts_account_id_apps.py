from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetAccountsAccountIDAppsPathParams:
    account_id: str = field(metadata={'path_param': { 'field_name': 'account_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAccountsAccountIDAppsSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetAccountsAccountIDAppsRequest:
    path_params: GetAccountsAccountIDAppsPathParams = field()
    security: GetAccountsAccountIDAppsSecurity = field()
    

@dataclass
class GetAccountsAccountIDAppsResponse:
    content_type: str = field()
    status_code: int = field()
    app_responses: Optional[List[shared.AppResponse]] = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    
