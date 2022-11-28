from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class OnDemandProvisioningSpecification:
    r"""OnDemandProvisioningSpecification
    <p> The launch specification for On-Demand Instances in the instance fleet, which determines the allocation strategy. </p> <note> <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions. On-Demand Instances allocation strategy is available in Amazon EMR version 5.12.1 and later.</p> </note>
    """
    
    allocation_strategy: OnDemandProvisioningAllocationStrategyEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AllocationStrategy') }})
    capacity_reservation_options: Optional[OnDemandCapacityReservationOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CapacityReservationOptions') }})
    
