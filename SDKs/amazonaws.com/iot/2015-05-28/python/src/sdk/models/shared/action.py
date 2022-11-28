from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Action:
    r"""Action
    Describes the actions associated with a rule.
    """
    
    cloudwatch_alarm: Optional[CloudwatchAlarmAction] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cloudwatchAlarm') }})
    cloudwatch_logs: Optional[CloudwatchLogsAction] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cloudwatchLogs') }})
    cloudwatch_metric: Optional[CloudwatchMetricAction] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cloudwatchMetric') }})
    dynamo_db: Optional[DynamoDbAction] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dynamoDB') }})
    dynamo_d_bv2: Optional[DynamoDBv2Action] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dynamoDBv2') }})
    elasticsearch: Optional[ElasticsearchAction] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('elasticsearch') }})
    firehose: Optional[FirehoseAction] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('firehose') }})
    http: Optional[HTTPAction] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('http') }})
    iot_analytics: Optional[IotAnalyticsAction] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iotAnalytics') }})
    iot_events: Optional[IotEventsAction] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iotEvents') }})
    iot_site_wise: Optional[IotSiteWiseAction] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iotSiteWise') }})
    kafka: Optional[KafkaAction] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kafka') }})
    kinesis: Optional[KinesisAction] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kinesis') }})
    lambda_: Optional[LambdaAction] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lambda') }})
    open_search: Optional[OpenSearchAction] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('openSearch') }})
    republish: Optional[RepublishAction] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('republish') }})
    s3: Optional[S3Action] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('s3') }})
    salesforce: Optional[SalesforceAction] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('salesforce') }})
    sns: Optional[SnsAction] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sns') }})
    sqs: Optional[SqsAction] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sqs') }})
    step_functions: Optional[StepFunctionsAction] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stepFunctions') }})
    timestream: Optional[TimestreamAction] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestream') }})
    
