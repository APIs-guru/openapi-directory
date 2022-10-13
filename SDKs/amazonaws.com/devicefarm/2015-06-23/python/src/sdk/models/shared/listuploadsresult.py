from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import upload


@dataclass_json
@dataclass
class ListUploadsResult:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    uploads: Optional[List[upload.Upload]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uploads' }})
    
