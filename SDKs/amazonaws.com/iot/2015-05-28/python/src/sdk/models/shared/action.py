from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import cloudwatchalarmaction
from . import cloudwatchlogsaction
from . import cloudwatchmetricaction
from . import dynamodbaction
from . import dynamodbv2action
from . import elasticsearchaction
from . import firehoseaction
from . import httpaction
from . import iotanalyticsaction
from . import ioteventsaction
from . import iotsitewiseaction
from . import kafkaaction
from . import kinesisaction
from . import lambdaaction
from . import opensearchaction
from . import republishaction
from . import s3action
from . import salesforceaction
from . import snsaction
from . import sqsaction
from . import stepfunctionsaction
from . import timestreamaction


@dataclass_json
@dataclass
class Action:
    cloudwatch_alarm: Optional[cloudwatchalarmaction.CloudwatchAlarmAction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cloudwatchAlarm' }})
    cloudwatch_logs: Optional[cloudwatchlogsaction.CloudwatchLogsAction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cloudwatchLogs' }})
    cloudwatch_metric: Optional[cloudwatchmetricaction.CloudwatchMetricAction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cloudwatchMetric' }})
    dynamo_db: Optional[dynamodbaction.DynamoDbAction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dynamoDB' }})
    dynamo_d_bv2: Optional[dynamodbv2action.DynamoDBv2Action] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dynamoDBv2' }})
    elasticsearch: Optional[elasticsearchaction.ElasticsearchAction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'elasticsearch' }})
    firehose: Optional[firehoseaction.FirehoseAction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'firehose' }})
    http: Optional[httpaction.HTTPAction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'http' }})
    iot_analytics: Optional[iotanalyticsaction.IotAnalyticsAction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'iotAnalytics' }})
    iot_events: Optional[ioteventsaction.IotEventsAction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'iotEvents' }})
    iot_site_wise: Optional[iotsitewiseaction.IotSiteWiseAction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'iotSiteWise' }})
    kafka: Optional[kafkaaction.KafkaAction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kafka' }})
    kinesis: Optional[kinesisaction.KinesisAction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kinesis' }})
    lambda_: Optional[lambdaaction.LambdaAction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lambda' }})
    open_search: Optional[opensearchaction.OpenSearchAction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'openSearch' }})
    republish: Optional[republishaction.RepublishAction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'republish' }})
    s3: Optional[s3action.S3Action] = field(default=None, metadata={'dataclasses_json': { 'field_name': 's3' }})
    salesforce: Optional[salesforceaction.SalesforceAction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'salesforce' }})
    sns: Optional[snsaction.SnsAction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sns' }})
    sqs: Optional[sqsaction.SqsAction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sqs' }})
    step_functions: Optional[stepfunctionsaction.StepFunctionsAction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stepFunctions' }})
    timestream: Optional[timestreamaction.TimestreamAction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timestream' }})
    
