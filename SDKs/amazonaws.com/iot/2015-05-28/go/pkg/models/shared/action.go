package shared

type Action struct {
	CloudwatchAlarm  *CloudwatchAlarmAction  `json:"cloudwatchAlarm"`
	CloudwatchLogs   *CloudwatchLogsAction   `json:"cloudwatchLogs"`
	CloudwatchMetric *CloudwatchMetricAction `json:"cloudwatchMetric"`
	DynamoDb         *DynamoDbAction         `json:"dynamoDB"`
	DynamoDBv2       *DynamoDBv2Action       `json:"dynamoDBv2"`
	Elasticsearch    *ElasticsearchAction    `json:"elasticsearch"`
	Firehose         *FirehoseAction         `json:"firehose"`
	HTTP             *HTTPAction             `json:"http"`
	IotAnalytics     *IotAnalyticsAction     `json:"iotAnalytics"`
	IotEvents        *IotEventsAction        `json:"iotEvents"`
	IotSiteWise      *IotSiteWiseAction      `json:"iotSiteWise"`
	Kafka            *KafkaAction            `json:"kafka"`
	Kinesis          *KinesisAction          `json:"kinesis"`
	Lambda           *LambdaAction           `json:"lambda"`
	OpenSearch       *OpenSearchAction       `json:"openSearch"`
	Republish        *RepublishAction        `json:"republish"`
	S3               *S3Action               `json:"s3"`
	Salesforce       *SalesforceAction       `json:"salesforce"`
	Sns              *SnsAction              `json:"sns"`
	Sqs              *SqsAction              `json:"sqs"`
	StepFunctions    *StepFunctionsAction    `json:"stepFunctions"`
	Timestream       *TimestreamAction       `json:"timestream"`
}
