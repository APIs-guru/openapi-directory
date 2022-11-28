from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateAutoScalingConfigurationRequest:
    auto_scaling_configuration_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AutoScalingConfigurationName') }})
    max_concurrency: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxConcurrency') }})
    max_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxSize') }})
    min_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MinSize') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
