from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import ondemandprovisioningallocationstrategy_enum
from . import ondemandcapacityreservationoptions


@dataclass_json
@dataclass
class OnDemandProvisioningSpecification:
    allocation_strategy: ondemandprovisioningallocationstrategy_enum.OnDemandProvisioningAllocationStrategyEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AllocationStrategy' }})
    capacity_reservation_options: Optional[ondemandcapacityreservationoptions.OnDemandCapacityReservationOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CapacityReservationOptions' }})
    
