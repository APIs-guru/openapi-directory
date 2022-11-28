from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class APIModelsUserRoleChangeActionEnum(str, Enum):
    GRANT = "Grant"
    REVOKE = "Revoke"


@dataclass_json
@dataclass
class APIModelsUserRoleChange:
    action: APIModelsUserRoleChangeActionEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Action') }, 'form': { 'field_name': 'Action' }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }, 'form': { 'field_name': 'Name' }})
    
