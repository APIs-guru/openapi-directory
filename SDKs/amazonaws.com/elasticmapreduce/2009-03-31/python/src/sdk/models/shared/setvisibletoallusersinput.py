from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SetVisibleToAllUsersInput:
    r"""SetVisibleToAllUsersInput
    The input to the SetVisibleToAllUsers action.
    """
    
    job_flow_ids: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('JobFlowIds') }})
    visible_to_all_users: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('VisibleToAllUsers') }})
    
