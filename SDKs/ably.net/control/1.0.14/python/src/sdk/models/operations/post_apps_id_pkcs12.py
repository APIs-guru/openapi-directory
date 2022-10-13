from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostAppsIDPkcs12PathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostAppsIDPkcs12Security:
    bearer_auth: shared.SchemeBearerAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class PostAppsIDPkcs12Request:
    path_params: PostAppsIDPkcs12PathParams = field(default=None)
    request: Optional[shared.AppPkcs12] = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    security: PostAppsIDPkcs12Security = field(default=None)
    

@dataclass
class PostAppsIDPkcs12Response:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    app_response: Optional[shared.AppResponse] = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    
