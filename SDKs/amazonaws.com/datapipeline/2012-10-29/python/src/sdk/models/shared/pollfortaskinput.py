from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PollForTaskInput:
    r"""PollForTaskInput
    Contains the parameters for PollForTask.
    """
    
    worker_group: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('workerGroup') }})
    hostname: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hostname') }})
    instance_identity: Optional[InstanceIdentity] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instanceIdentity') }})
    
