from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ListAssociatedStacksRequest:
    fleet_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FleetName' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
