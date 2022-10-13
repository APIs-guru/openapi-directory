from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import get


@dataclass_json
@dataclass
class TransactGetItem:
    get: get.Get = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Get' }})
    
