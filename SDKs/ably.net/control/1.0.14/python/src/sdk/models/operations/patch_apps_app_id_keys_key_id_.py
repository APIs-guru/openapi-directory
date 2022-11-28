from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PatchAppsAppIDKeysKeyIDPathParams:
    app_id: str = field(metadata={'path_param': { 'field_name': 'app_id', 'style': 'simple', 'explode': False }})
    key_id: str = field(metadata={'path_param': { 'field_name': 'key_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PatchAppsAppIDKeysKeyIDSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class PatchAppsAppIDKeysKeyIDRequest:
    path_params: PatchAppsAppIDKeysKeyIDPathParams = field()
    security: PatchAppsAppIDKeysKeyIDSecurity = field()
    request: Optional[shared.KeyPatch] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PatchAppsAppIDKeysKeyIDResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[shared.Error] = field(default=None)
    key_response: Optional[shared.KeyResponse] = field(default=None)
    
