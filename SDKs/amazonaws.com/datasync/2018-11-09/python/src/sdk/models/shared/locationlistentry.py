from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class LocationListEntry:
    location_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LocationArn' }})
    location_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LocationUri' }})
    
