from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import parameterattribute


@dataclass_json
@dataclass
class ParameterObject:
    attributes: List[parameterattribute.ParameterAttribute] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attributes' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    
