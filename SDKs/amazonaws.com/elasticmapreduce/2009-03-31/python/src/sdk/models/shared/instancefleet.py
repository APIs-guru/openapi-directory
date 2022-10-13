from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import instancefleettype_enum
from . import instancetypespecification
from . import instancefleetprovisioningspecifications
from . import instancefleetstatus


@dataclass_json
@dataclass
class InstanceFleet:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }})
    instance_fleet_type: Optional[instancefleettype_enum.InstanceFleetTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstanceFleetType' }})
    instance_type_specifications: Optional[List[instancetypespecification.InstanceTypeSpecification]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstanceTypeSpecifications' }})
    launch_specifications: Optional[instancefleetprovisioningspecifications.InstanceFleetProvisioningSpecifications] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LaunchSpecifications' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    provisioned_on_demand_capacity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProvisionedOnDemandCapacity' }})
    provisioned_spot_capacity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProvisionedSpotCapacity' }})
    status: Optional[instancefleetstatus.InstanceFleetStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    target_on_demand_capacity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TargetOnDemandCapacity' }})
    target_spot_capacity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TargetSpotCapacity' }})
    
