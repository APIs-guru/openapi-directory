from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class FSxWindowsFileServerAuthorizationConfig:
    credentials_parameter: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'credentialsParameter' }})
    domain: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'domain' }})
    
