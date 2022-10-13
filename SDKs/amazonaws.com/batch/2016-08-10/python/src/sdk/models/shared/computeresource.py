from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import crallocationstrategy_enum
from . import ec2configuration
from . import launchtemplatespecification
from . import crtype_enum


@dataclass_json
@dataclass
class ComputeResource:
    allocation_strategy: Optional[crallocationstrategy_enum.CrAllocationStrategyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allocationStrategy' }})
    bid_percentage: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bidPercentage' }})
    desiredv_cpus: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'desiredvCpus' }})
    ec2_configuration: Optional[List[ec2configuration.Ec2Configuration]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ec2Configuration' }})
    ec2_key_pair: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ec2KeyPair' }})
    image_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imageId' }})
    instance_role: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instanceRole' }})
    instance_types: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instanceTypes' }})
    launch_template: Optional[launchtemplatespecification.LaunchTemplateSpecification] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'launchTemplate' }})
    maxv_cpus: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxvCpus' }})
    minv_cpus: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minvCpus' }})
    placement_group: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'placementGroup' }})
    security_group_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'securityGroupIds' }})
    spot_iam_fleet_role: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'spotIamFleetRole' }})
    subnets: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subnets' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    type: crtype_enum.CrTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
