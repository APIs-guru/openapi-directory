from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostAppsAppIDKeysKeyIDRevokePathParams:
    app_id: str = field(default=None, metadata={'path_param': { 'field_name': 'app_id', 'style': 'simple', 'explode': False }})
    key_id: str = field(default=None, metadata={'path_param': { 'field_name': 'key_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostAppsAppIDKeysKeyIDRevokeSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class PostAppsAppIDKeysKeyIDRevokeRequest:
    path_params: PostAppsAppIDKeysKeyIDRevokePathParams = field(default=None)
    security: PostAppsAppIDKeysKeyIDRevokeSecurity = field(default=None)
    

@dataclass
class PostAppsAppIDKeysKeyIDRevokeResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    
