from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import cleartimeraction
from . import dynamodbaction
from . import dynamodbv2action
from . import firehoseaction
from . import ioteventsaction
from . import iotsitewiseaction
from . import iottopicpublishaction
from . import lambdaaction
from . import resettimeraction
from . import settimeraction
from . import setvariableaction
from . import snstopicpublishaction
from . import sqsaction


@dataclass_json
@dataclass
class Action:
    clear_timer: Optional[cleartimeraction.ClearTimerAction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clearTimer' }})
    dynamo_db: Optional[dynamodbaction.DynamoDbAction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dynamoDB' }})
    dynamo_d_bv2: Optional[dynamodbv2action.DynamoDBv2Action] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dynamoDBv2' }})
    firehose: Optional[firehoseaction.FirehoseAction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'firehose' }})
    iot_events: Optional[ioteventsaction.IotEventsAction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'iotEvents' }})
    iot_site_wise: Optional[iotsitewiseaction.IotSiteWiseAction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'iotSiteWise' }})
    iot_topic_publish: Optional[iottopicpublishaction.IotTopicPublishAction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'iotTopicPublish' }})
    lambda_: Optional[lambdaaction.LambdaAction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lambda' }})
    reset_timer: Optional[resettimeraction.ResetTimerAction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resetTimer' }})
    set_timer: Optional[settimeraction.SetTimerAction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'setTimer' }})
    set_variable: Optional[setvariableaction.SetVariableAction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'setVariable' }})
    sns: Optional[snstopicpublishaction.SnsTopicPublishAction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sns' }})
    sqs: Optional[sqsaction.SqsAction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sqs' }})
    
