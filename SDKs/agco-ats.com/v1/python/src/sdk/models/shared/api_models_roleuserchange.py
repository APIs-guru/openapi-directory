from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class APIModelsRoleUserChangeActionEnum(str, Enum):
    GRANT = "Grant"
    REVOKE = "Revoke"


@dataclass_json
@dataclass
class APIModelsRoleUserChange:
    action: APIModelsRoleUserChangeActionEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Action') }, 'form': { 'field_name': 'Action' }})
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Id') }, 'form': { 'field_name': 'Id' }})
    
