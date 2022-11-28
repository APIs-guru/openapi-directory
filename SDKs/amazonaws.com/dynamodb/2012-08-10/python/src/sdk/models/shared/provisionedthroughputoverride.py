from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ProvisionedThroughputOverride:
    r"""ProvisionedThroughputOverride
    Replica-specific provisioned throughput settings. If not specified, uses the source table's provisioned throughput settings.
    """
    
    read_capacity_units: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReadCapacityUnits') }})
    
