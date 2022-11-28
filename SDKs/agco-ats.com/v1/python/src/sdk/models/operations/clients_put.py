from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class ClientsPutPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'ID', 'style': 'simple', 'explode': False }})
    

@dataclass
class ClientsPutRequests:
    application_xml: bytes = field(metadata={'request': { 'media_type': 'application/xml' }})
    text_xml: bytes = field(metadata={'request': { 'media_type': 'text/xml' }})
    update_system_models_client: Optional[shared.UpdateSystemModelsClient] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    update_system_models_client1: Optional[shared.UpdateSystemModelsClient] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    update_system_models_client2: Optional[shared.UpdateSystemModelsClient] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class ClientsPutRequest:
    path_params: ClientsPutPathParams = field()
    request: ClientsPutRequests = field()
    

@dataclass
class ClientsPutResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
