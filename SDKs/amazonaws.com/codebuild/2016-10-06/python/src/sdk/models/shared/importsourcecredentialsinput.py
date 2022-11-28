from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ImportSourceCredentialsInput:
    auth_type: AuthTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('authType') }})
    server_type: ServerTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('serverType') }})
    token: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('token') }})
    should_overwrite: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shouldOverwrite') }})
    username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('username') }})
    
