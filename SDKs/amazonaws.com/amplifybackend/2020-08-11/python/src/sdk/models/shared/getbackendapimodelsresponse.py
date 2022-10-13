from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import status_enum


@dataclass_json
@dataclass
class GetBackendAPIModelsResponse:
    models: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Models' }})
    status: Optional[status_enum.StatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    
