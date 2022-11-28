from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UserSetting:
    r"""UserSetting
    Describes an action and whether the action is enabled or disabled for users during their streaming sessions.
    """
    
    action: ActionEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Action') }})
    permission: PermissionEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Permission') }})
    
