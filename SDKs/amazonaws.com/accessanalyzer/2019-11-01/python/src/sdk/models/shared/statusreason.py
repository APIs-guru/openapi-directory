from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import reasoncode_enum


@dataclass_json
@dataclass
class StatusReason:
    code: reasoncode_enum.ReasonCodeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    
