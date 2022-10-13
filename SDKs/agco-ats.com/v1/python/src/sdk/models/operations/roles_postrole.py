from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RolesPostRoleRequests:
    api_models_role: Optional[shared.APIModelsRole] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    api_models_role1: Optional[shared.APIModelsRole] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    api_models_role2: Optional[shared.APIModelsRole] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    application_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'application/xml' }})
    text_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'text/xml' }})
    

@dataclass
class RolesPostRoleRequest:
    request: RolesPostRoleRequests = field(default=None)
    

@dataclass
class RolesPostRoleResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    roles_post_role_200_application_json_int32_integer: Optional[int] = field(default=None)
    roles_post_role_200_text_json_int32_integer: Optional[int] = field(default=None)
    status_code: int = field(default=None)
    
