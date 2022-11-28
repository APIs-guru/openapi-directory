from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class APIModelsPasswordReset:
    new_password: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('NewPassword') }, 'form': { 'field_name': 'NewPassword' }})
    token: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Token') }, 'form': { 'field_name': 'Token' }})
    
