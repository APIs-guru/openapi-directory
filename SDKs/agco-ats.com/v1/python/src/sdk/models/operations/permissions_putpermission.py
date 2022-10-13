from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PermissionsPutPermissionPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PermissionsPutPermissionRequests:
    api_models_permission: Optional[shared.APIModelsPermission] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    api_models_permission1: Optional[shared.APIModelsPermission] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    api_models_permission2: Optional[shared.APIModelsPermission] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    application_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'application/xml' }})
    text_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'text/xml' }})
    

@dataclass
class PermissionsPutPermissionRequest:
    path_params: PermissionsPutPermissionPathParams = field(default=None)
    request: PermissionsPutPermissionRequests = field(default=None)
    

@dataclass
class PermissionsPutPermissionResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
