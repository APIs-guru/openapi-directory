from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import regiondescription


@dataclass_json
@dataclass
class DescribeRegionsResult:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    regions_description: Optional[List[regiondescription.RegionDescription]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RegionsDescription' }})
    
