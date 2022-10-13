from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import toolchainsource


@dataclass_json
@dataclass
class Toolchain:
    role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'roleArn' }})
    source: toolchainsource.ToolchainSource = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source' }})
    stack_parameters: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stackParameters' }})
    
