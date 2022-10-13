from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class UsernameConfigurationType:
    case_sensitive: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CaseSensitive' }})
    
