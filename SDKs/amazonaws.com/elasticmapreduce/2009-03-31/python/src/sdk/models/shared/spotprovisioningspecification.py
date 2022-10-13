from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import spotprovisioningallocationstrategy_enum
from . import spotprovisioningtimeoutaction_enum


@dataclass_json
@dataclass
class SpotProvisioningSpecification:
    allocation_strategy: Optional[spotprovisioningallocationstrategy_enum.SpotProvisioningAllocationStrategyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AllocationStrategy' }})
    block_duration_minutes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BlockDurationMinutes' }})
    timeout_action: spotprovisioningtimeoutaction_enum.SpotProvisioningTimeoutActionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TimeoutAction' }})
    timeout_duration_minutes: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TimeoutDurationMinutes' }})
    
