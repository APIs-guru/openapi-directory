from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import volumefilter


@dataclass_json
@dataclass
class DescribeVolumesRequest:
    filters: Optional[List[volumefilter.VolumeFilter]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Filters' }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxResults' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    volume_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VolumeIds' }})
    
