from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostAppsAppIDKeysPathParams:
    app_id: str = field(metadata={'path_param': { 'field_name': 'app_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostAppsAppIDKeysSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class PostAppsAppIDKeysRequest:
    path_params: PostAppsAppIDKeysPathParams = field()
    security: PostAppsAppIDKeysSecurity = field()
    request: Optional[shared.KeyPost] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostAppsAppIDKeysResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[shared.Error] = field(default=None)
    key_response: Optional[shared.KeyResponse] = field(default=None)
    
