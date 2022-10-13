from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import workgroupconfigurationupdates
from . import workgroupstate_enum


@dataclass_json
@dataclass
class UpdateWorkGroupInput:
    configuration_updates: Optional[workgroupconfigurationupdates.WorkGroupConfigurationUpdates] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConfigurationUpdates' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    state: Optional[workgroupstate_enum.WorkGroupStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'State' }})
    work_group: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WorkGroup' }})
    
