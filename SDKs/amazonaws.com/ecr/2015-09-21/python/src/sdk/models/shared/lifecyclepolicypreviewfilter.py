from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import tagstatus_enum


@dataclass_json
@dataclass
class LifecyclePolicyPreviewFilter:
    tag_status: Optional[tagstatus_enum.TagStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tagStatus' }})
    
