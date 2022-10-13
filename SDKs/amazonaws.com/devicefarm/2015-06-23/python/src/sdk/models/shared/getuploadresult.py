from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import upload


@dataclass_json
@dataclass
class GetUploadResult:
    upload: Optional[upload.Upload] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'upload' }})
    
