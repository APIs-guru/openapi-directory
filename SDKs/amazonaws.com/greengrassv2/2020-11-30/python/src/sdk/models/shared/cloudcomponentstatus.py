from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import cloudcomponentstate_enum


@dataclass_json
@dataclass
class CloudComponentStatus:
    component_state: Optional[cloudcomponentstate_enum.CloudComponentStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'componentState' }})
    errors: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    
