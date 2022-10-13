from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import runtime_enum


@dataclass_json
@dataclass
class CodeConfigurationValues:
    build_command: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BuildCommand' }})
    port: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Port' }})
    runtime: runtime_enum.RuntimeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Runtime' }})
    runtime_environment_variables: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RuntimeEnvironmentVariables' }})
    start_command: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StartCommand' }})
    
