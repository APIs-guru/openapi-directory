from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AuthorizationCodesSharedModelsCategory:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }, 'form': { 'field_name': 'Description' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ID' }, 'form': { 'field_name': 'ID' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }, 'form': { 'field_name': 'Name' }})
    
