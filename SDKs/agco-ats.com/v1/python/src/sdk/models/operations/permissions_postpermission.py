from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PermissionsPostPermissionRequests:
    api_models_permission: Optional[shared.APIModelsPermission] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    api_models_permission1: Optional[shared.APIModelsPermission] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    api_models_permission2: Optional[shared.APIModelsPermission] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    application_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'application/xml' }})
    text_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'text/xml' }})
    

@dataclass
class PermissionsPostPermissionRequest:
    request: PermissionsPostPermissionRequests = field(default=None)
    

@dataclass
class PermissionsPostPermissionResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    permissions_post_permission_200_application_json_int32_integer: Optional[int] = field(default=None)
    permissions_post_permission_200_text_json_int32_integer: Optional[int] = field(default=None)
    status_code: int = field(default=None)
    
