from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class APIModelsPasswordResetRequest:
    parameter_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ParameterName') }, 'form': { 'field_name': 'ParameterName' }})
    url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Url') }, 'form': { 'field_name': 'Url' }})
    username: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Username') }, 'form': { 'field_name': 'Username' }})
    
