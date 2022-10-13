from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AttachToIndexResponse:
    attached_object_identifier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AttachedObjectIdentifier' }})
    
