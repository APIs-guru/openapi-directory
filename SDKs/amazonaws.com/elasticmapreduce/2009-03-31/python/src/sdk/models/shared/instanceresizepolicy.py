from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class InstanceResizePolicy:
    r"""InstanceResizePolicy
    Custom policy for requesting termination protection or termination of specific instances when shrinking an instance group.
    """
    
    instance_termination_timeout: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstanceTerminationTimeout') }})
    instances_to_protect: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstancesToProtect') }})
    instances_to_terminate: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstancesToTerminate') }})
    
