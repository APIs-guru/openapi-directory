from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class APIModelsPermissionDataRequiredEnum(str, Enum):
    YES = "Yes"
    NO = "No"
    OPTIONAL = "Optional"


@dataclass_json
@dataclass
class APIModelsPermission:
    data_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DataDescription' }, 'form': { 'field_name': 'DataDescription' }})
    data_required: APIModelsPermissionDataRequiredEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DataRequired' }, 'form': { 'field_name': 'DataRequired' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }, 'form': { 'field_name': 'Description' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }, 'form': { 'field_name': 'Id' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }, 'form': { 'field_name': 'Name' }})
    
