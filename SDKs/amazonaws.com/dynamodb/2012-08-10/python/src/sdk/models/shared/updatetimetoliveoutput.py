from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import timetolivespecification


@dataclass_json
@dataclass
class UpdateTimeToLiveOutput:
    time_to_live_specification: Optional[timetolivespecification.TimeToLiveSpecification] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TimeToLiveSpecification' }})
    
