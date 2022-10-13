from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import expressiontype_enum
from . import inputserialization
from . import outputserialization


@dataclass_json
@dataclass
class SelectParameters:
    expression: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Expression' }})
    expression_type: Optional[expressiontype_enum.ExpressionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExpressionType' }})
    input_serialization: Optional[inputserialization.InputSerialization] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InputSerialization' }})
    output_serialization: Optional[outputserialization.OutputSerialization] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OutputSerialization' }})
    
