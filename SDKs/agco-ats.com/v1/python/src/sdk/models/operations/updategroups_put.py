from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class UpdateGroupsPutPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'ID', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateGroupsPutRequests:
    application_xml: bytes = field(metadata={'request': { 'media_type': 'application/xml' }})
    text_xml: bytes = field(metadata={'request': { 'media_type': 'text/xml' }})
    update_system_models_update_group: Optional[shared.UpdateSystemModelsUpdateGroup] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    update_system_models_update_group1: Optional[shared.UpdateSystemModelsUpdateGroup] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    update_system_models_update_group2: Optional[shared.UpdateSystemModelsUpdateGroup] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class UpdateGroupsPutRequest:
    path_params: UpdateGroupsPutPathParams = field()
    request: UpdateGroupsPutRequests = field()
    

@dataclass
class UpdateGroupsPutResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
