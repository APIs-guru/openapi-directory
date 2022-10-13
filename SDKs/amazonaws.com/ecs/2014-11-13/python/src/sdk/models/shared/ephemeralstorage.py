from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class EphemeralStorage:
    size_in_gi_b: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sizeInGiB' }})
    
