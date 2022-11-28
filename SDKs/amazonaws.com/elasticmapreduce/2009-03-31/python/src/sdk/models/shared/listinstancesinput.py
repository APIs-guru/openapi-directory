from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListInstancesInput:
    r"""ListInstancesInput
    This input determines which instances to list.
    """
    
    cluster_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClusterId') }})
    instance_fleet_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstanceFleetId') }})
    instance_fleet_type: Optional[InstanceFleetTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstanceFleetType') }})
    instance_group_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstanceGroupId') }})
    instance_group_types: Optional[List[InstanceGroupTypeEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstanceGroupTypes') }})
    instance_states: Optional[List[InstanceStateEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstanceStates') }})
    marker: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Marker') }})
    
