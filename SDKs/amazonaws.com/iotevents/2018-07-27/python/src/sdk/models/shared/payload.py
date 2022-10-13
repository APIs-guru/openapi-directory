from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import payloadtype_enum


@dataclass_json
@dataclass
class Payload:
    content_expression: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contentExpression' }})
    type: payloadtype_enum.PayloadTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
