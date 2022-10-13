from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class KeySchemaElement:
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    
