from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class EfsAuthorizationConfig:
    r"""EfsAuthorizationConfig
    The authorization configuration details for the Amazon EFS file system.
    """
    
    access_point_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessPointId') }})
    iam: Optional[EfsAuthorizationConfigIamEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iam') }})
    
