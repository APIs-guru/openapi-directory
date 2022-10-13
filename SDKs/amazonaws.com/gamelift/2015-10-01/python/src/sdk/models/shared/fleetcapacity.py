from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import ec2instancecounts
from . import ec2instancetype_enum


@dataclass_json
@dataclass
class FleetCapacity:
    fleet_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FleetArn' }})
    fleet_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FleetId' }})
    instance_counts: Optional[ec2instancecounts.Ec2InstanceCounts] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstanceCounts' }})
    instance_type: Optional[ec2instancetype_enum.Ec2InstanceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstanceType' }})
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Location' }})
    
