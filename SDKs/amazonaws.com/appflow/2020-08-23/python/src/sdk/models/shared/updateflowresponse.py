from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import flowstatus_enum


@dataclass_json
@dataclass
class UpdateFlowResponse:
    flow_status: Optional[flowstatus_enum.FlowStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'flowStatus' }})
    
