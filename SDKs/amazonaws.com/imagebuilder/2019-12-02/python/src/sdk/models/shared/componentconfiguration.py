from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import componentparameter


@dataclass_json
@dataclass
class ComponentConfiguration:
    component_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'componentArn' }})
    parameters: Optional[List[componentparameter.ComponentParameter]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parameters' }})
    
