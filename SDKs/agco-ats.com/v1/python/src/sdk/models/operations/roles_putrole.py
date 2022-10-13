from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RolesPutRolePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RolesPutRoleRequests:
    api_models_role: Optional[shared.APIModelsRole] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    api_models_role1: Optional[shared.APIModelsRole] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    api_models_role2: Optional[shared.APIModelsRole] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    application_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'application/xml' }})
    text_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'text/xml' }})
    

@dataclass
class RolesPutRoleRequest:
    path_params: RolesPutRolePathParams = field(default=None)
    request: RolesPutRoleRequests = field(default=None)
    

@dataclass
class RolesPutRoleResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
