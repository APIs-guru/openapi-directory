from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DescribeComponentConfigurationResponse:
    component_configuration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ComponentConfiguration') }})
    monitor: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Monitor') }})
    tier: Optional[TierEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tier') }})
    
