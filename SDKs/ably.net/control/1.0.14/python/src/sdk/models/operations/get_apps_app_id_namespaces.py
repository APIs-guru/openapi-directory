from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetAppsAppIDNamespacesPathParams:
    app_id: str = field(metadata={'path_param': { 'field_name': 'app_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAppsAppIDNamespacesSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetAppsAppIDNamespacesRequest:
    path_params: GetAppsAppIDNamespacesPathParams = field()
    security: GetAppsAppIDNamespacesSecurity = field()
    

@dataclass
class GetAppsAppIDNamespacesResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[shared.Error] = field(default=None)
    namespace_responses: Optional[List[shared.NamespaceResponse]] = field(default=None)
    
