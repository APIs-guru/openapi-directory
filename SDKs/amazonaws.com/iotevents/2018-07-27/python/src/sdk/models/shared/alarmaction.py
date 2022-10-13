from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import dynamodbaction
from . import dynamodbv2action
from . import firehoseaction
from . import ioteventsaction
from . import iotsitewiseaction
from . import iottopicpublishaction
from . import lambdaaction
from . import snstopicpublishaction
from . import sqsaction


@dataclass_json
@dataclass
class AlarmAction:
    dynamo_db: Optional[dynamodbaction.DynamoDbAction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dynamoDB' }})
    dynamo_d_bv2: Optional[dynamodbv2action.DynamoDBv2Action] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dynamoDBv2' }})
    firehose: Optional[firehoseaction.FirehoseAction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'firehose' }})
    iot_events: Optional[ioteventsaction.IotEventsAction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'iotEvents' }})
    iot_site_wise: Optional[iotsitewiseaction.IotSiteWiseAction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'iotSiteWise' }})
    iot_topic_publish: Optional[iottopicpublishaction.IotTopicPublishAction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'iotTopicPublish' }})
    lambda_: Optional[lambdaaction.LambdaAction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lambda' }})
    sns: Optional[snstopicpublishaction.SnsTopicPublishAction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sns' }})
    sqs: Optional[sqsaction.SqsAction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sqs' }})
    
