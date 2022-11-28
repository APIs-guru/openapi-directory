from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostAppsIDPkcs12PathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostAppsIDPkcs12Security:
    bearer_auth: shared.SchemeBearerAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class PostAppsIDPkcs12Request:
    path_params: PostAppsIDPkcs12PathParams = field()
    security: PostAppsIDPkcs12Security = field()
    request: Optional[shared.AppPkcs12] = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class PostAppsIDPkcs12Response:
    content_type: str = field()
    status_code: int = field()
    app_response: Optional[shared.AppResponse] = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    
