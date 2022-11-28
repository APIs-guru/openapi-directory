from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class KeyRetrievePathParams:
    pk: str = field(metadata={'path_param': { 'field_name': 'PK', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class KeyRetrieveJwt:
    since: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('since'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    sub: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sub') }})
    

@dataclass
class KeyRetrieveRequest:
    path_params: KeyRetrievePathParams = field()
    

@dataclass
class KeyRetrieveResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    error: Optional[Any] = field(default=None)
    jwt: Optional[KeyRetrieveJwt] = field(default=None)
    
