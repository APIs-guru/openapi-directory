from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Alarms:
    r"""Alarms
    Contains the configuration information of an alarm created in an IoT SiteWise Monitor portal. You can use the alarm to monitor an asset property and get notified when the asset property value is outside a specified range. For more information, see <a href=\"https://docs.aws.amazon.com/iot-sitewise/latest/appguide/monitor-alarms.html\">Monitoring with alarms</a> in the <i>IoT SiteWise Application Guide</i>.
    """
    
    alarm_role_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('alarmRoleArn') }})
    notification_lambda_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notificationLambdaArn') }})
    
