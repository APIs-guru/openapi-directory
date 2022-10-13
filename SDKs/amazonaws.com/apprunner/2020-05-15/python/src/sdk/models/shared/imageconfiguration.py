from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ImageConfiguration:
    port: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Port' }})
    runtime_environment_variables: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RuntimeEnvironmentVariables' }})
    start_command: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StartCommand' }})
    
