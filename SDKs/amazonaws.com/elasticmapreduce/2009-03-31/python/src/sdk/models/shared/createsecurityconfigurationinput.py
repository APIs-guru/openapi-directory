from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CreateSecurityConfigurationInput:
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    security_configuration: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SecurityConfiguration' }})
    
