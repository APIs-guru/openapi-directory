from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import instancefleettype_enum
from . import instancetypeconfig
from . import instancefleetprovisioningspecifications


@dataclass_json
@dataclass
class InstanceFleetConfig:
    instance_fleet_type: instancefleettype_enum.InstanceFleetTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstanceFleetType' }})
    instance_type_configs: Optional[List[instancetypeconfig.InstanceTypeConfig]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstanceTypeConfigs' }})
    launch_specifications: Optional[instancefleetprovisioningspecifications.InstanceFleetProvisioningSpecifications] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LaunchSpecifications' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    target_on_demand_capacity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TargetOnDemandCapacity' }})
    target_spot_capacity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TargetSpotCapacity' }})
    
