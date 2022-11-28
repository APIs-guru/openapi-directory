from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteAppsAppIDNamespacesNamespaceIDPathParams:
    app_id: str = field(metadata={'path_param': { 'field_name': 'app_id', 'style': 'simple', 'explode': False }})
    namespace_id: str = field(metadata={'path_param': { 'field_name': 'namespace_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteAppsAppIDNamespacesNamespaceIDSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class DeleteAppsAppIDNamespacesNamespaceIDRequest:
    path_params: DeleteAppsAppIDNamespacesNamespaceIDPathParams = field()
    security: DeleteAppsAppIDNamespacesNamespaceIDSecurity = field()
    

@dataclass
class DeleteAppsAppIDNamespacesNamespaceIDResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[shared.Error] = field(default=None)
    
