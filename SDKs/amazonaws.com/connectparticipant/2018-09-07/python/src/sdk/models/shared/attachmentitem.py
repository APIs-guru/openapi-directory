from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import artifactstatus_enum


@dataclass_json
@dataclass
class AttachmentItem:
    attachment_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AttachmentId' }})
    attachment_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AttachmentName' }})
    content_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ContentType' }})
    status: Optional[artifactstatus_enum.ArtifactStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    
