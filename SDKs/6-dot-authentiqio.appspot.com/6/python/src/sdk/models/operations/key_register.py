from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class KeyRegister201ApplicationJSON:
    secret: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secret') }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass
class KeyRegisterRequest:
    request: bytes = field(metadata={'request': { 'media_type': 'application/jwt' }})
    

@dataclass
class KeyRegisterResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    error: Optional[Any] = field(default=None)
    key_register_201_application_json_object: Optional[KeyRegister201ApplicationJSON] = field(default=None)
    
