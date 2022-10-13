from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import component


@dataclass_json
@dataclass
class GetComponentResponse:
    component: Optional[component.Component] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'component' }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestId' }})
    
