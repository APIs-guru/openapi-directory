from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import instancegroupstatechangereasoncode_enum


@dataclass_json
@dataclass
class InstanceGroupStateChangeReason:
    code: Optional[instancegroupstatechangereasoncode_enum.InstanceGroupStateChangeReasonCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Code' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Message' }})
    
