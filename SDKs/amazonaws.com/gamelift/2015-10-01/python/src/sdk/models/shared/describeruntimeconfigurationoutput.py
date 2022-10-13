from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import runtimeconfiguration


@dataclass_json
@dataclass
class DescribeRuntimeConfigurationOutput:
    runtime_configuration: Optional[runtimeconfiguration.RuntimeConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RuntimeConfiguration' }})
    
