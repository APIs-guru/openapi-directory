from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import instancestatechangereasoncode_enum


@dataclass_json
@dataclass
class InstanceStateChangeReason:
    code: Optional[instancestatechangereasoncode_enum.InstanceStateChangeReasonCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Code' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Message' }})
    
