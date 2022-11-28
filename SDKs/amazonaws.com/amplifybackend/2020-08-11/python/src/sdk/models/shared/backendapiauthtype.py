from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BackendAPIAuthType:
    r"""BackendAPIAuthType
    Describes the auth types for your configured data models.
    """
    
    mode: Optional[ModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Mode') }})
    settings: Optional[BackendAPIAppSyncAuthSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Settings') }})
    
