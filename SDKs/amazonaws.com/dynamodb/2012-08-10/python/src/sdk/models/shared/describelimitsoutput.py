from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DescribeLimitsOutput:
    account_max_read_capacity_units: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AccountMaxReadCapacityUnits' }})
    account_max_write_capacity_units: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AccountMaxWriteCapacityUnits' }})
    table_max_read_capacity_units: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TableMaxReadCapacityUnits' }})
    table_max_write_capacity_units: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TableMaxWriteCapacityUnits' }})
    
