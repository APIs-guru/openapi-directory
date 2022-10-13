from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import imageversion


@dataclass_json
@dataclass
class ListImagesResponse:
    image_version_list: Optional[List[imageversion.ImageVersion]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imageVersionList' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestId' }})
    
