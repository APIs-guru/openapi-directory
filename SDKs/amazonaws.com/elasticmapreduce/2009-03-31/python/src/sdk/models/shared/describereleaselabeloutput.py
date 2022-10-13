from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import simplifiedapplication


@dataclass_json
@dataclass
class DescribeReleaseLabelOutput:
    applications: Optional[List[simplifiedapplication.SimplifiedApplication]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Applications' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    release_label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReleaseLabel' }})
    
