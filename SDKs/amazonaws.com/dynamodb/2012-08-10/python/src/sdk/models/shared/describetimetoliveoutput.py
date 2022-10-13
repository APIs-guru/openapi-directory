from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import timetolivedescription


@dataclass_json
@dataclass
class DescribeTimeToLiveOutput:
    time_to_live_description: Optional[timetolivedescription.TimeToLiveDescription] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TimeToLiveDescription' }})
    
