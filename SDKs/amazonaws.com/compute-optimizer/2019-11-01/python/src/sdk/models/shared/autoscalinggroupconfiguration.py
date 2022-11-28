from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AutoScalingGroupConfiguration:
    r"""AutoScalingGroupConfiguration
    Describes the configuration of an Auto Scaling group.
    """
    
    desired_capacity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('desiredCapacity') }})
    instance_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instanceType') }})
    max_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxSize') }})
    min_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minSize') }})
    
