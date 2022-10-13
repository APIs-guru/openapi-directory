from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PatchAppsAppIDKeysKeyIDPathParams:
    app_id: str = field(default=None, metadata={'path_param': { 'field_name': 'app_id', 'style': 'simple', 'explode': False }})
    key_id: str = field(default=None, metadata={'path_param': { 'field_name': 'key_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PatchAppsAppIDKeysKeyIDSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class PatchAppsAppIDKeysKeyIDRequest:
    path_params: PatchAppsAppIDKeysKeyIDPathParams = field(default=None)
    request: Optional[shared.KeyPatch] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: PatchAppsAppIDKeysKeyIDSecurity = field(default=None)
    

@dataclass
class PatchAppsAppIDKeysKeyIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    key_response: Optional[shared.KeyResponse] = field(default=None)
    
