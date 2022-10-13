from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class InitiateLayerUploadResponse:
    part_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'partSize' }})
    upload_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uploadId' }})
    
