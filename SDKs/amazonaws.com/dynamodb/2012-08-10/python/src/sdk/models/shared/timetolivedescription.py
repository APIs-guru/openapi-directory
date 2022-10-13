from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import timetolivestatus_enum


@dataclass_json
@dataclass
class TimeToLiveDescription:
    attribute_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AttributeName' }})
    time_to_live_status: Optional[timetolivestatus_enum.TimeToLiveStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TimeToLiveStatus' }})
    
