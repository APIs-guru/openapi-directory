from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import containercondition_enum


@dataclass_json
@dataclass
class ContainerDependency:
    condition: containercondition_enum.ContainerConditionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'condition' }})
    container_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'containerName' }})
    
