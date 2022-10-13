from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import interconnectstate_enum


@dataclass_json
@dataclass
class DeleteInterconnectResponse:
    interconnect_state: Optional[interconnectstate_enum.InterconnectStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'interconnectState' }})
    
