from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import findingreasoncode_enum


@dataclass_json
@dataclass
class ReasonCodeSummary:
    name: Optional[findingreasoncode_enum.FindingReasonCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
