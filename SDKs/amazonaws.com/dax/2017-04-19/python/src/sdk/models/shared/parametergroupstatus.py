from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ParameterGroupStatus:
    node_ids_to_reboot: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NodeIdsToReboot' }})
    parameter_apply_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ParameterApplyStatus' }})
    parameter_group_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ParameterGroupName' }})
    
