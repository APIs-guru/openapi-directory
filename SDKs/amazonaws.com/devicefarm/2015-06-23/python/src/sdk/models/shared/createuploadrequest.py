from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import uploadtype_enum


@dataclass_json
@dataclass
class CreateUploadRequest:
    content_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contentType' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    project_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'projectArn' }})
    type: uploadtype_enum.UploadTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
