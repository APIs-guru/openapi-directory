from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ProvisionedThroughput:
    read_capacity_units: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReadCapacityUnits' }})
    write_capacity_units: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WriteCapacityUnits' }})
    
