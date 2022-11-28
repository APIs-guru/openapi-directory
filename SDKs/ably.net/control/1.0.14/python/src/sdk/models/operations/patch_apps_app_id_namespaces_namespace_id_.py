from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PatchAppsAppIDNamespacesNamespaceIDPathParams:
    app_id: str = field(metadata={'path_param': { 'field_name': 'app_id', 'style': 'simple', 'explode': False }})
    namespace_id: str = field(metadata={'path_param': { 'field_name': 'namespace_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PatchAppsAppIDNamespacesNamespaceIDSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class PatchAppsAppIDNamespacesNamespaceIDRequest:
    path_params: PatchAppsAppIDNamespacesNamespaceIDPathParams = field()
    security: PatchAppsAppIDNamespacesNamespaceIDSecurity = field()
    request: Optional[shared.NamespacePatch] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PatchAppsAppIDNamespacesNamespaceIDResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[shared.Error] = field(default=None)
    namespace_response: Optional[shared.NamespaceResponse] = field(default=None)
    
