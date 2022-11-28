from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class APIModelsCredentialsBearerActionEnum(str, Enum):
    NONE = "None"
    RESET = "Reset"
    DISABLE = "Disable"

class APIModelsCredentialsMacActionEnum(str, Enum):
    NONE = "None"
    RESET = "Reset"
    DISABLE = "Disable"


@dataclass_json
@dataclass
class APIModelsCredentials:
    password: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('password') }, 'form': { 'field_name': 'password' }})
    username: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('username') }, 'form': { 'field_name': 'username' }})
    bearer_action: Optional[APIModelsCredentialsBearerActionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BearerAction') }, 'form': { 'field_name': 'BearerAction' }})
    mac_action: Optional[APIModelsCredentialsMacActionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MACAction') }, 'form': { 'field_name': 'MACAction' }})
    
