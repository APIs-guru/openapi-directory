from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass
class KeyRegisterRequest:
    request: bytes = field(default=None, metadata={'request': { 'media_type': 'application/jwt' }})
    

@dataclass_json
@dataclass
class KeyRegister201ApplicationJSON:
    secret: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'secret' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    

@dataclass
class KeyRegisterResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    error: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    key_register_201_application_json_object: Optional[KeyRegister201ApplicationJSON] = field(default=None)
    
