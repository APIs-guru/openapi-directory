from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import volume


@dataclass_json
@dataclass
class DescribeVolumesResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    volumes: Optional[List[volume.Volume]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Volumes' }})
    
