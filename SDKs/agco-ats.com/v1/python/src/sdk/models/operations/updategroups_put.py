from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class UpdateGroupsPutPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'ID', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateGroupsPutRequests:
    application_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'application/xml' }})
    text_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'text/xml' }})
    update_system_models_update_group: Optional[shared.UpdateSystemModelsUpdateGroup] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    update_system_models_update_group1: Optional[shared.UpdateSystemModelsUpdateGroup] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    update_system_models_update_group2: Optional[shared.UpdateSystemModelsUpdateGroup] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class UpdateGroupsPutRequest:
    path_params: UpdateGroupsPutPathParams = field(default=None)
    request: UpdateGroupsPutRequests = field(default=None)
    

@dataclass
class UpdateGroupsPutResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
