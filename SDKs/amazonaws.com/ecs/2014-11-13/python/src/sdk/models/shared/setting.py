from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Setting:
    r"""Setting
    The current account setting for a resource.
    """
    
    name: Optional[SettingNameEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    principal_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('principalArn') }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
