from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ContainerInfo:
    r"""ContainerInfo
    The information about the container used for a job run or a managed endpoint.
    """
    
    eks_info: Optional[EksInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eksInfo') }})
    
