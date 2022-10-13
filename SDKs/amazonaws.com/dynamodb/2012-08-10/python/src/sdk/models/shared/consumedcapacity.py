from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import capacity
from . import capacity
from . import capacity


@dataclass_json
@dataclass
class ConsumedCapacity:
    capacity_units: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CapacityUnits' }})
    global_secondary_indexes: Optional[dict[str, capacity.Capacity]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GlobalSecondaryIndexes' }})
    local_secondary_indexes: Optional[dict[str, capacity.Capacity]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LocalSecondaryIndexes' }})
    read_capacity_units: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReadCapacityUnits' }})
    table: Optional[capacity.Capacity] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Table' }})
    table_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TableName' }})
    write_capacity_units: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WriteCapacityUnits' }})
    
