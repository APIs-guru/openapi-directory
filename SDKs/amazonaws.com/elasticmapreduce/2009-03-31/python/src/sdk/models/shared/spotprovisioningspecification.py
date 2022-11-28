from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SpotProvisioningSpecification:
    r"""SpotProvisioningSpecification
    <p>The launch specification for Spot Instances in the instance fleet, which determines the defined duration, provisioning timeout behavior, and allocation strategy.</p> <note> <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions. Spot Instance allocation strategy is available in Amazon EMR version 5.12.1 and later.</p> </note>
    """
    
    timeout_action: SpotProvisioningTimeoutActionEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TimeoutAction') }})
    timeout_duration_minutes: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TimeoutDurationMinutes') }})
    allocation_strategy: Optional[SpotProvisioningAllocationStrategyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AllocationStrategy') }})
    block_duration_minutes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BlockDurationMinutes') }})
    
