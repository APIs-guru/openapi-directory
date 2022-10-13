from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostAccountsAccountIDAppsPathParams:
    account_id: str = field(default=None, metadata={'path_param': { 'field_name': 'account_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostAccountsAccountIDAppsSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class PostAccountsAccountIDAppsRequest:
    path_params: PostAccountsAccountIDAppsPathParams = field(default=None)
    request: Optional[shared.AppPost] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: PostAccountsAccountIDAppsSecurity = field(default=None)
    

@dataclass
class PostAccountsAccountIDAppsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    app_response: Optional[shared.AppResponse] = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    
