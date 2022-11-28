from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class APIModelsPermissionDataRequiredEnum(str, Enum):
    YES = "Yes"
    NO = "No"
    OPTIONAL = "Optional"


@dataclass_json
@dataclass
class APIModelsPermission:
    data_required: APIModelsPermissionDataRequiredEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataRequired') }, 'form': { 'field_name': 'DataRequired' }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }, 'form': { 'field_name': 'Name' }})
    data_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataDescription') }, 'form': { 'field_name': 'DataDescription' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }, 'form': { 'field_name': 'Description' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Id') }, 'form': { 'field_name': 'Id' }})
    
