from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import ondemandcapacityreservationpreference_enum
from . import ondemandcapacityreservationusagestrategy_enum


@dataclass_json
@dataclass
class OnDemandCapacityReservationOptions:
    capacity_reservation_preference: Optional[ondemandcapacityreservationpreference_enum.OnDemandCapacityReservationPreferenceEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CapacityReservationPreference' }})
    capacity_reservation_resource_group_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CapacityReservationResourceGroupArn' }})
    usage_strategy: Optional[ondemandcapacityreservationusagestrategy_enum.OnDemandCapacityReservationUsageStrategyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UsageStrategy' }})
    
