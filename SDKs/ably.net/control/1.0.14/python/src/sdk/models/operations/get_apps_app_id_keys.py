from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetAppsAppIDKeysPathParams:
    app_id: str = field(metadata={'path_param': { 'field_name': 'app_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAppsAppIDKeysSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetAppsAppIDKeysRequest:
    path_params: GetAppsAppIDKeysPathParams = field()
    security: GetAppsAppIDKeysSecurity = field()
    

@dataclass
class GetAppsAppIDKeysResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[shared.Error] = field(default=None)
    key_responses: Optional[List[shared.KeyResponse]] = field(default=None)
    
