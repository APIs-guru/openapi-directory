from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ParameterGroupStatus:
    r"""ParameterGroupStatus
    The status of a parameter group.
    """
    
    node_ids_to_reboot: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NodeIdsToReboot') }})
    parameter_apply_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ParameterApplyStatus') }})
    parameter_group_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ParameterGroupName') }})
    
