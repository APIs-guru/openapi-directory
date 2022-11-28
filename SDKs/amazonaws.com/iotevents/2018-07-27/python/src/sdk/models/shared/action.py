from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Action:
    r"""Action
    An action to be performed when the <code>condition</code> is TRUE.
    """
    
    clear_timer: Optional[ClearTimerAction] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clearTimer') }})
    dynamo_db: Optional[DynamoDbAction] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dynamoDB') }})
    dynamo_d_bv2: Optional[DynamoDBv2Action] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dynamoDBv2') }})
    firehose: Optional[FirehoseAction] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('firehose') }})
    iot_events: Optional[IotEventsAction] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iotEvents') }})
    iot_site_wise: Optional[IotSiteWiseAction] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iotSiteWise') }})
    iot_topic_publish: Optional[IotTopicPublishAction] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iotTopicPublish') }})
    lambda_: Optional[LambdaAction] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lambda') }})
    reset_timer: Optional[ResetTimerAction] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resetTimer') }})
    set_timer: Optional[SetTimerAction] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('setTimer') }})
    set_variable: Optional[SetVariableAction] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('setVariable') }})
    sns: Optional[SnsTopicPublishAction] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sns') }})
    sqs: Optional[SqsAction] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sqs') }})
    
