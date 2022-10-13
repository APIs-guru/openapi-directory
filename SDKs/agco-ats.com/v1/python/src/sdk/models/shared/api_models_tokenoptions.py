from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

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
    bearer_action: Optional[APIModelsTokenOptionsBearerActionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BearerAction' }, 'form': { 'field_name': 'BearerAction' }})
    mac_action: Optional[APIModelsTokenOptionsMacActionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MACAction' }, 'form': { 'field_name': 'MACAction' }})
    
