from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import devicefilter


@dataclass_json
@dataclass
class ListDevicesRequest:
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'arn' }})
    filters: Optional[List[devicefilter.DeviceFilter]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filters' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    
