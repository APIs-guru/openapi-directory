from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AutoRollbackConfiguration:
    r"""AutoRollbackConfiguration
    Information about a configuration for automatically rolling back to a previous version of an application revision when a deployment is not completed successfully.
    """
    
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    events: Optional[List[AutoRollbackEventEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('events') }})
    
