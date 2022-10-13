from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteAppsAppIDNamespacesNamespaceIDPathParams:
    app_id: str = field(default=None, metadata={'path_param': { 'field_name': 'app_id', 'style': 'simple', 'explode': False }})
    namespace_id: str = field(default=None, metadata={'path_param': { 'field_name': 'namespace_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteAppsAppIDNamespacesNamespaceIDSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class DeleteAppsAppIDNamespacesNamespaceIDRequest:
    path_params: DeleteAppsAppIDNamespacesNamespaceIDPathParams = field(default=None)
    security: DeleteAppsAppIDNamespacesNamespaceIDSecurity = field(default=None)
    

@dataclass
class DeleteAppsAppIDNamespacesNamespaceIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    
