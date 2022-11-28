from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Grant:
    r"""Grant
    Contains information about a grant.
    """
    
    grantee: Optional[Grantee] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Grantee') }})
    permission: Optional[PermissionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Permission') }})
    
