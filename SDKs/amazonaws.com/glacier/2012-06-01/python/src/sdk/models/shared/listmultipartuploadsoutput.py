from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import uploadlistelement


@dataclass_json
@dataclass
class ListMultipartUploadsOutput:
    marker: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Marker' }})
    uploads_list: Optional[List[uploadlistelement.UploadListElement]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UploadsList' }})
    
