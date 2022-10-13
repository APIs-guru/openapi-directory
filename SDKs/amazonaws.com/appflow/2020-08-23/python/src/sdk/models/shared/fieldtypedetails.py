from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import operator_enum


@dataclass_json
@dataclass
class FieldTypeDetails:
    field_type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fieldType' }})
    filter_operators: List[operator_enum.OperatorEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filterOperators' }})
    supported_values: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'supportedValues' }})
    
