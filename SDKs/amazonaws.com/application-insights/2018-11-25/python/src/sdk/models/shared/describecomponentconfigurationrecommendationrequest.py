from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DescribeComponentConfigurationRecommendationRequest:
    component_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ComponentName') }})
    resource_group_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceGroupName') }})
    tier: TierEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tier') }})
    
