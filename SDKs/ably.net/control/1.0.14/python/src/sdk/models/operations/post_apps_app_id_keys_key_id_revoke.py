from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostAppsAppIDKeysKeyIDRevokePathParams:
    app_id: str = field(metadata={'path_param': { 'field_name': 'app_id', 'style': 'simple', 'explode': False }})
    key_id: str = field(metadata={'path_param': { 'field_name': 'key_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostAppsAppIDKeysKeyIDRevokeSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class PostAppsAppIDKeysKeyIDRevokeRequest:
    path_params: PostAppsAppIDKeysKeyIDRevokePathParams = field()
    security: PostAppsAppIDKeysKeyIDRevokeSecurity = field()
    

@dataclass
class PostAppsAppIDKeysKeyIDRevokeResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[shared.Error] = field(default=None)
    
