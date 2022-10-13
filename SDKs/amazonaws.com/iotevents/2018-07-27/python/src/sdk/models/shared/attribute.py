from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Attribute:
    json_path: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jsonPath' }})
    
