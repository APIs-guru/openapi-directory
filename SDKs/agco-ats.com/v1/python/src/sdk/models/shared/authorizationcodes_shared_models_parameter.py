from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AuthorizationCodesSharedModelsParameter:
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    value: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Value' }})
    
