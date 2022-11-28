from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DescribeLimitsOutput:
    r"""DescribeLimitsOutput
    Represents the output of a <code>DescribeLimits</code> operation.
    """
    
    account_max_read_capacity_units: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccountMaxReadCapacityUnits') }})
    account_max_write_capacity_units: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccountMaxWriteCapacityUnits') }})
    table_max_read_capacity_units: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TableMaxReadCapacityUnits') }})
    table_max_write_capacity_units: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TableMaxWriteCapacityUnits') }})
    
