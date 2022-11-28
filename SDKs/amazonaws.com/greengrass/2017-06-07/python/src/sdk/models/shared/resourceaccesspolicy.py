from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ResourceAccessPolicy:
    r"""ResourceAccessPolicy
    A policy used by the function to access a resource.
    """
    
    resource_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceId') }})
    permission: Optional[PermissionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Permission') }})
    
