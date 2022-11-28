package shared

// Action
// Describes the actions associated with a rule.
type Action struct {
	CloudwatchAlarm  *CloudwatchAlarmAction  `json:"cloudwatchAlarm,omitempty"`
	CloudwatchLogs   *CloudwatchLogsAction   `json:"cloudwatchLogs,omitempty"`
	CloudwatchMetric *CloudwatchMetricAction `json:"cloudwatchMetric,omitempty"`
	DynamoDb         *DynamoDbAction         `json:"dynamoDB,omitempty"`
	DynamoDBv2       *DynamoDBv2Action       `json:"dynamoDBv2,omitempty"`
	Elasticsearch    *ElasticsearchAction    `json:"elasticsearch,omitempty"`
	Firehose         *FirehoseAction         `json:"firehose,omitempty"`
	HTTP             *HTTPAction             `json:"http,omitempty"`
	IotAnalytics     *IotAnalyticsAction     `json:"iotAnalytics,omitempty"`
	IotEvents        *IotEventsAction        `json:"iotEvents,omitempty"`
	IotSiteWise      *IotSiteWiseAction      `json:"iotSiteWise,omitempty"`
	Kafka            *KafkaAction            `json:"kafka,omitempty"`
	Kinesis          *KinesisAction          `json:"kinesis,omitempty"`
	Lambda           *LambdaAction           `json:"lambda,omitempty"`
	OpenSearch       *OpenSearchAction       `json:"openSearch,omitempty"`
	Republish        *RepublishAction        `json:"republish,omitempty"`
	S3               *S3Action               `json:"s3,omitempty"`
	Salesforce       *SalesforceAction       `json:"salesforce,omitempty"`
	Sns              *SnsAction              `json:"sns,omitempty"`
	Sqs              *SqsAction              `json:"sqs,omitempty"`
	StepFunctions    *StepFunctionsAction    `json:"stepFunctions,omitempty"`
	Timestream       *TimestreamAction       `json:"timestream,omitempty"`
}
