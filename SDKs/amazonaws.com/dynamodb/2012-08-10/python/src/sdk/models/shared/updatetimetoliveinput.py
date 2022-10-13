from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import timetolivespecification


@dataclass_json
@dataclass
class UpdateTimeToLiveInput:
    table_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TableName' }})
    time_to_live_specification: timetolivespecification.TimeToLiveSpecification = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TimeToLiveSpecification' }})
    
