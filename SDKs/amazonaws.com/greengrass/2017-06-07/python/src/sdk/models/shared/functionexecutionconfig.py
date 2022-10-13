from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import functionisolationmode_enum
from . import functionrunasconfig


@dataclass_json
@dataclass
class FunctionExecutionConfig:
    isolation_mode: Optional[functionisolationmode_enum.FunctionIsolationModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IsolationMode' }})
    run_as: Optional[functionrunasconfig.FunctionRunAsConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RunAs' }})
    
