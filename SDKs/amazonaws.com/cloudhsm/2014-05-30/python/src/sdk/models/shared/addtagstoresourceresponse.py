from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AddTagsToResourceResponse:
    status: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    
