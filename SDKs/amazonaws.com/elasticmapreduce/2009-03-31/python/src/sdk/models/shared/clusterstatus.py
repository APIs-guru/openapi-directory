from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ClusterStatus:
    r"""ClusterStatus
    The detailed status of the cluster.
    """
    
    state: Optional[ClusterStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('State') }})
    state_change_reason: Optional[ClusterStateChangeReason] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StateChangeReason') }})
    timeline: Optional[ClusterTimeline] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Timeline') }})
    
