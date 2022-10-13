from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Capacity:
    capacity_units: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CapacityUnits' }})
    read_capacity_units: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReadCapacityUnits' }})
    write_capacity_units: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WriteCapacityUnits' }})
    
