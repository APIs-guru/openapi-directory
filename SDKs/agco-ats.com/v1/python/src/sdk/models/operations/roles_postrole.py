from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RolesPostRoleRequests:
    application_xml: bytes = field(metadata={'request': { 'media_type': 'application/xml' }})
    text_xml: bytes = field(metadata={'request': { 'media_type': 'text/xml' }})
    api_models_role: Optional[shared.APIModelsRole] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    api_models_role1: Optional[shared.APIModelsRole] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    api_models_role2: Optional[shared.APIModelsRole] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class RolesPostRoleRequest:
    request: RolesPostRoleRequests = field()
    

@dataclass
class RolesPostRoleResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    roles_post_role_200_application_json_int32_integer: Optional[int] = field(default=None)
    roles_post_role_200_text_json_int32_integer: Optional[int] = field(default=None)
    
