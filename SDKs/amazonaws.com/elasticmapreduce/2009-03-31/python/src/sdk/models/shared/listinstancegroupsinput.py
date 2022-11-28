from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ListInstanceGroupsInput:
    r"""ListInstanceGroupsInput
    This input determines which instance groups to retrieve.
    """
    
    cluster_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClusterId') }})
    marker: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Marker') }})
    
