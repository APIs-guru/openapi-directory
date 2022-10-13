from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Trail:
    all_regions: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allRegions' }})
    cloud_trail_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cloudTrailArn' }})
    regions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'regions' }})
    
