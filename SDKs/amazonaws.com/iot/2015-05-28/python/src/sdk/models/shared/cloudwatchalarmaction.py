from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CloudwatchAlarmAction:
    alarm_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'alarmName' }})
    role_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'roleArn' }})
    state_reason: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stateReason' }})
    state_value: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stateValue' }})
    
