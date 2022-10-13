from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class UpdateModelResponse:
    content_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ContentType' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    model_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ModelId' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    schema: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Schema' }})
    
