from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import imageidentifier


@dataclass_json
@dataclass
class ListImagesResponse:
    image_ids: Optional[List[imageidentifier.ImageIdentifier]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imageIds' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    
