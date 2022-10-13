from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import managedscalingstatus_enum


@dataclass_json
@dataclass
class ManagedScaling:
    instance_warmup_period: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instanceWarmupPeriod' }})
    maximum_scaling_step_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maximumScalingStepSize' }})
    minimum_scaling_step_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minimumScalingStepSize' }})
    status: Optional[managedscalingstatus_enum.ManagedScalingStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    target_capacity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetCapacity' }})
    
