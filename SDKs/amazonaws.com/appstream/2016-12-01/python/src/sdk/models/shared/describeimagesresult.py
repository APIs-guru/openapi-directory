from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import image


@dataclass_json
@dataclass
class DescribeImagesResult:
    images: Optional[List[image.Image]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Images' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
