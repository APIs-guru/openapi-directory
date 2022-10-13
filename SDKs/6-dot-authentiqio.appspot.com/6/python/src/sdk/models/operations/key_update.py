from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass
class KeyUpdatePathParams:
    pk: str = field(default=None, metadata={'path_param': { 'field_name': 'PK', 'style': 'simple', 'explode': False }})
    

@dataclass
class KeyUpdateRequest:
    path_params: KeyUpdatePathParams = field(default=None)
    request: bytes = field(default=None, metadata={'request': { 'media_type': 'application/jwt' }})
    

@dataclass_json
@dataclass
class KeyUpdate200ApplicationJSON:
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    

@dataclass
class KeyUpdateResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    error: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    key_update_200_application_json_object: Optional[KeyUpdate200ApplicationJSON] = field(default=None)
    
