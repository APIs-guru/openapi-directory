from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostAppsAppIDKeysPathParams:
    app_id: str = field(default=None, metadata={'path_param': { 'field_name': 'app_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostAppsAppIDKeysSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class PostAppsAppIDKeysRequest:
    path_params: PostAppsAppIDKeysPathParams = field(default=None)
    request: Optional[shared.KeyPost] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: PostAppsAppIDKeysSecurity = field(default=None)
    

@dataclass
class PostAppsAppIDKeysResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    key_response: Optional[shared.KeyResponse] = field(default=None)
    
