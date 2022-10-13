from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import connectionstate_enum


@dataclass_json
@dataclass
class ConfirmConnectionResponse:
    connection_state: Optional[connectionstate_enum.ConnectionStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connectionState' }})
    
