from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class KeyUpdatePathParams:
    pk: str = field(metadata={'path_param': { 'field_name': 'PK', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class KeyUpdate200ApplicationJSON:
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass
class KeyUpdateRequest:
    path_params: KeyUpdatePathParams = field()
    request: bytes = field(metadata={'request': { 'media_type': 'application/jwt' }})
    

@dataclass
class KeyUpdateResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    error: Optional[Any] = field(default=None)
    key_update_200_application_json_object: Optional[KeyUpdate200ApplicationJSON] = field(default=None)
    
