from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class APIModelsPasswordResetRequest:
    parameter_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ParameterName' }, 'form': { 'field_name': 'ParameterName' }})
    url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Url' }, 'form': { 'field_name': 'Url' }})
    username: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Username' }, 'form': { 'field_name': 'Username' }})
    
