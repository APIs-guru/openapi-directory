from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class InstalledComponent:
    r"""InstalledComponent
    Contains information about a component on a Greengrass core device.
    """
    
    component_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('componentName') }})
    component_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('componentVersion') }})
    is_root: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isRoot') }})
    lifecycle_state: Optional[InstalledComponentLifecycleStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lifecycleState') }})
    lifecycle_state_details: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lifecycleStateDetails') }})
    
