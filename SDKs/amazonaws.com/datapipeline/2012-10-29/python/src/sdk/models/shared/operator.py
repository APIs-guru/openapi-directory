from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import operatortype_enum


@dataclass_json
@dataclass
class Operator:
    type: Optional[operatortype_enum.OperatorTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    values: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'values' }})
    
