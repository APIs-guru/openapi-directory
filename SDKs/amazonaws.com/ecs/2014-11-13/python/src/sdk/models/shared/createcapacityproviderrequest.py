from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateCapacityProviderRequest:
    auto_scaling_group_provider: AutoScalingGroupProvider = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('autoScalingGroupProvider') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    
