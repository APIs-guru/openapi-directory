from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import installedcomponentlifecyclestate_enum


@dataclass_json
@dataclass
class InstalledComponent:
    component_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'componentName' }})
    component_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'componentVersion' }})
    is_root: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isRoot' }})
    lifecycle_state: Optional[installedcomponentlifecyclestate_enum.InstalledComponentLifecycleStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lifecycleState' }})
    lifecycle_state_details: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lifecycleStateDetails' }})
    
