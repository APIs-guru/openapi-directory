from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class UpdateUploadRequest:
    arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'arn' }})
    content_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contentType' }})
    edit_content: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'editContent' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
