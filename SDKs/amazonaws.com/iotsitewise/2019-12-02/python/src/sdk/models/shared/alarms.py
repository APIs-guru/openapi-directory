from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Alarms:
    alarm_role_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'alarmRoleArn' }})
    notification_lambda_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notificationLambdaArn' }})
    
