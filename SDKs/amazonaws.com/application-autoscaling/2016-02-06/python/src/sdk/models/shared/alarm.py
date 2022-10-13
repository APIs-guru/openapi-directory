from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Alarm:
    alarm_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AlarmARN' }})
    alarm_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AlarmName' }})
    
