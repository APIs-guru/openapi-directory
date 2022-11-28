from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class LogSetup:
    r"""LogSetup
    An object representing the enabled or disabled Kubernetes control plane logs for your cluster.
    """
    
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    types: Optional[List[LogTypeEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('types') }})
    
