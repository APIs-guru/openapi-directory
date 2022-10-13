from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import imagefailure
from . import imageidentifier


@dataclass_json
@dataclass
class BatchDeleteImageResponse:
    failures: Optional[List[imagefailure.ImageFailure]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'failures' }})
    image_ids: Optional[List[imageidentifier.ImageIdentifier]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imageIds' }})
    
