from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class OnDemandCapacityReservationOptions:
    r"""OnDemandCapacityReservationOptions
    Describes the strategy for using unused Capacity Reservations for fulfilling On-Demand capacity.
    """
    
    capacity_reservation_preference: Optional[OnDemandCapacityReservationPreferenceEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CapacityReservationPreference') }})
    capacity_reservation_resource_group_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CapacityReservationResourceGroupArn') }})
    usage_strategy: Optional[OnDemandCapacityReservationUsageStrategyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UsageStrategy') }})
    
