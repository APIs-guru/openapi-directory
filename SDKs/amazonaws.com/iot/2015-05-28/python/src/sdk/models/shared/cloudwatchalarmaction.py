from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CloudwatchAlarmAction:
    r"""CloudwatchAlarmAction
    Describes an action that updates a CloudWatch alarm.
    """
    
    alarm_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('alarmName') }})
    role_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('roleArn') }})
    state_reason: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('stateReason') }})
    state_value: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('stateValue') }})
    
