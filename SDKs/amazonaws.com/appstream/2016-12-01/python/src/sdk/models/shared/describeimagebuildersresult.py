from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import imagebuilder


@dataclass_json
@dataclass
class DescribeImageBuildersResult:
    image_builders: Optional[List[imagebuilder.ImageBuilder]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ImageBuilders' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
