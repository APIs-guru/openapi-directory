from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import imagetagdetail


@dataclass_json
@dataclass
class DescribeImageTagsResponse:
    image_tag_details: Optional[List[imagetagdetail.ImageTagDetail]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imageTagDetails' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    
