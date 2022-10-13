from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import operator


@dataclass_json
@dataclass
class Selector:
    field_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fieldName' }})
    operator: Optional[operator.Operator] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'operator' }})
    
