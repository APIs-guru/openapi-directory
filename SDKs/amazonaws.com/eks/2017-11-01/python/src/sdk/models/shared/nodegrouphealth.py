from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class NodegroupHealth:
    r"""NodegroupHealth
    An object representing the health status of the node group.
    """
    
    issues: Optional[List[Issue]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('issues') }})
    
