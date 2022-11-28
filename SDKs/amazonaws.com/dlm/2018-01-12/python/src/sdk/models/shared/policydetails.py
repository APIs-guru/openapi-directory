from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PolicyDetails:
    r"""PolicyDetails
    Specifies the configuration of a lifecycle policy.
    """
    
    actions: Optional[List[Action]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Actions') }})
    event_source: Optional[EventSource] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EventSource') }})
    parameters: Optional[Parameters] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Parameters') }})
    policy_type: Optional[PolicyTypeValuesEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PolicyType') }})
    resource_locations: Optional[List[ResourceLocationValuesEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceLocations') }})
    resource_types: Optional[List[ResourceTypeValuesEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceTypes') }})
    schedules: Optional[List[Schedule]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Schedules') }})
    target_tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TargetTags') }})
    
