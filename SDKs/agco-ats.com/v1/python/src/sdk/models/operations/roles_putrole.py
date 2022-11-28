from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RolesPutRolePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RolesPutRoleRequests:
    application_xml: bytes = field(metadata={'request': { 'media_type': 'application/xml' }})
    text_xml: bytes = field(metadata={'request': { 'media_type': 'text/xml' }})
    api_models_role: Optional[shared.APIModelsRole] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    api_models_role1: Optional[shared.APIModelsRole] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    api_models_role2: Optional[shared.APIModelsRole] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class RolesPutRoleRequest:
    path_params: RolesPutRolePathParams = field()
    request: RolesPutRoleRequests = field()
    

@dataclass
class RolesPutRoleResponse:
    content_type: str = field()
    status_code: int = field()
    
