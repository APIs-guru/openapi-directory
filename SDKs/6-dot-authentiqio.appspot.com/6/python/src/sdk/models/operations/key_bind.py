from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class KeyBindPathParams:
    pk: str = field(metadata={'path_param': { 'field_name': 'PK', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class KeyBind200ApplicationJSON:
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass
class KeyBindRequest:
    path_params: KeyBindPathParams = field()
    request: bytes = field(metadata={'request': { 'media_type': 'application/jwt' }})
    

@dataclass
class KeyBindResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    error: Optional[Any] = field(default=None)
    key_bind_200_application_json_object: Optional[KeyBind200ApplicationJSON] = field(default=None)
    
