from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

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
    bearer_action: Optional[APIModelsCredentialsBearerActionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BearerAction' }, 'form': { 'field_name': 'BearerAction' }})
    mac_action: Optional[APIModelsCredentialsMacActionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MACAction' }, 'form': { 'field_name': 'MACAction' }})
    password: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'password' }, 'form': { 'field_name': 'password' }})
    username: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'username' }, 'form': { 'field_name': 'username' }})
    
