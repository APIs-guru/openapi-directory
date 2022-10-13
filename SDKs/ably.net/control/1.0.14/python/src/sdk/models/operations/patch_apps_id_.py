from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PatchAppsIDPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PatchAppsIDSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class PatchAppsIDRequest:
    path_params: PatchAppsIDPathParams = field(default=None)
    request: Optional[shared.AppPatch] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: PatchAppsIDSecurity = field(default=None)
    

@dataclass
class PatchAppsIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    app_response: Optional[shared.AppResponse] = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    
