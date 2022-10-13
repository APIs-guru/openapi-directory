from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ClientsPutPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'ID', 'style': 'simple', 'explode': False }})
    

@dataclass
class ClientsPutRequests:
    application_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'application/xml' }})
    text_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'text/xml' }})
    update_system_models_client: Optional[shared.UpdateSystemModelsClient] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    update_system_models_client1: Optional[shared.UpdateSystemModelsClient] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    update_system_models_client2: Optional[shared.UpdateSystemModelsClient] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class ClientsPutRequest:
    path_params: ClientsPutPathParams = field(default=None)
    request: ClientsPutRequests = field(default=None)
    

@dataclass
class ClientsPutResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
