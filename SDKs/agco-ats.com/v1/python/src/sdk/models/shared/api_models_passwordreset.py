from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class APIModelsPasswordReset:
    new_password: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NewPassword' }, 'form': { 'field_name': 'NewPassword' }})
    token: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Token' }, 'form': { 'field_name': 'Token' }})
    
