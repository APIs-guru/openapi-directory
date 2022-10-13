from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetAppsAppIDNamespacesPathParams:
    app_id: str = field(default=None, metadata={'path_param': { 'field_name': 'app_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAppsAppIDNamespacesSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetAppsAppIDNamespacesRequest:
    path_params: GetAppsAppIDNamespacesPathParams = field(default=None)
    security: GetAppsAppIDNamespacesSecurity = field(default=None)
    

@dataclass
class GetAppsAppIDNamespacesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    namespace_responses: Optional[List[shared.NamespaceResponse]] = field(default=None)
    
