from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ResourceDownloadOwnerSetting:
    r"""ResourceDownloadOwnerSetting
    The owner setting for downloaded machine learning resources.
    """
    
    group_owner: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('GroupOwner') }})
    group_permission: PermissionEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('GroupPermission') }})
    
