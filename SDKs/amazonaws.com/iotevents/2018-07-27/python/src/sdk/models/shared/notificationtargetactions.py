from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class NotificationTargetActions:
    r"""NotificationTargetActions
    Specifies an AWS Lambda function to manage alarm notifications. You can create one or use the <a href=\"https://docs.aws.amazon.com/iotevents/latest/developerguide/lambda-support.html\">AWS Lambda function provided by AWS IoT Events</a>.
    """
    
    lambda_action: Optional[LambdaAction] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lambdaAction') }})
    
