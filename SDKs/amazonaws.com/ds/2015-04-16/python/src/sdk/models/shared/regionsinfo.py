from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class RegionsInfo:
    additional_regions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AdditionalRegions' }})
    primary_region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PrimaryRegion' }})
    
