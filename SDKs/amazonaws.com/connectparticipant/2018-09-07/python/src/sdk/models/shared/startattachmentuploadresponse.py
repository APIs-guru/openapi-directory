from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import uploadmetadata


@dataclass_json
@dataclass
class StartAttachmentUploadResponse:
    attachment_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AttachmentId' }})
    upload_metadata: Optional[uploadmetadata.UploadMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UploadMetadata' }})
    
