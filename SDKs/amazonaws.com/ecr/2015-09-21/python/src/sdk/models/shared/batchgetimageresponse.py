from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import imagefailure
from . import image


@dataclass_json
@dataclass
class BatchGetImageResponse:
    failures: Optional[List[imagefailure.ImageFailure]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'failures' }})
    images: Optional[List[image.Image]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'images' }})
    
