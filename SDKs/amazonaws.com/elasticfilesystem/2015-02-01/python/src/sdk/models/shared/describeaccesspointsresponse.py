from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import accesspointdescription


@dataclass_json
@dataclass
class DescribeAccessPointsResponse:
    access_points: Optional[List[accesspointdescription.AccessPointDescription]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AccessPoints' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
