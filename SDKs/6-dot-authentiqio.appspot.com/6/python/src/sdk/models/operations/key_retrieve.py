from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass
class KeyRetrievePathParams:
    pk: str = field(default=None, metadata={'path_param': { 'field_name': 'PK', 'style': 'simple', 'explode': False }})
    

@dataclass
class KeyRetrieveRequest:
    path_params: KeyRetrievePathParams = field(default=None)
    

@dataclass_json
@dataclass
class KeyRetrieve200ApplicationJSONJwt:
    since: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'since', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    sub: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sub' }})
    

@dataclass
class KeyRetrieveResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    error: Optional[Any] = field(default=None)
    jwt: Optional[KeyRetrieve200ApplicationJSONJwt] = field(default=None)
    status_code: int = field(default=None)
    
