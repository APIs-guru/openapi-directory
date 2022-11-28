from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Capacity:
    r"""Capacity
    Represents the amount of provisioned throughput capacity consumed on a table or an index.
    """
    
    capacity_units: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CapacityUnits') }})
    read_capacity_units: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReadCapacityUnits') }})
    write_capacity_units: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WriteCapacityUnits') }})
    
