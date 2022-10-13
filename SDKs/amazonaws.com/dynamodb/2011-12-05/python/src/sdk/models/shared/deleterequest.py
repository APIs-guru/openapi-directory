from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import key


@dataclass_json
@dataclass
class DeleteRequest:
    key: key.Key = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Key' }})
    
