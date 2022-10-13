from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostAppsAppIDNamespacesPathParams:
    app_id: str = field(default=None, metadata={'path_param': { 'field_name': 'app_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostAppsAppIDNamespacesSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class PostAppsAppIDNamespacesRequest:
    path_params: PostAppsAppIDNamespacesPathParams = field(default=None)
    request: Optional[shared.NamespacePost] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: PostAppsAppIDNamespacesSecurity = field(default=None)
    

@dataclass
class PostAppsAppIDNamespacesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    namespace_response: Optional[shared.NamespaceResponse] = field(default=None)
    
