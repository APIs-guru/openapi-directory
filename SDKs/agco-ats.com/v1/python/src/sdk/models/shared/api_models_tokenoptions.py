from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class APIModelsTokenOptionsBearerActionEnum(str, Enum):
    NONE = "None"
    RESET = "Reset"
    DISABLE = "Disable"

class APIModelsTokenOptionsMacActionEnum(str, Enum):
    NONE = "None"
    RESET = "Reset"
    DISABLE = "Disable"


@dataclass_json
@dataclass
class APIModelsTokenOptions:
    bearer_action: Optional[APIModelsTokenOptionsBearerActionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BearerAction') }, 'form': { 'field_name': 'BearerAction' }})
    mac_action: Optional[APIModelsTokenOptionsMacActionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MACAction') }, 'form': { 'field_name': 'MACAction' }})
    
