from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass
class KeyBindPathParams:
    pk: str = field(default=None, metadata={'path_param': { 'field_name': 'PK', 'style': 'simple', 'explode': False }})
    

@dataclass
class KeyBindRequest:
    path_params: KeyBindPathParams = field(default=None)
    request: bytes = field(default=None, metadata={'request': { 'media_type': 'application/jwt' }})
    

@dataclass_json
@dataclass
class KeyBind200ApplicationJSON:
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    

@dataclass
class KeyBindResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    error: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    key_bind_200_application_json_object: Optional[KeyBind200ApplicationJSON] = field(default=None)
    
