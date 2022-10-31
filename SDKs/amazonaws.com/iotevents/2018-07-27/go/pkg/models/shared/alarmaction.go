package shared

type AlarmAction struct {
	DynamoDb        *DynamoDbAction        `json:"dynamoDB,omitempty"`
	DynamoDBv2      *DynamoDBv2Action      `json:"dynamoDBv2,omitempty"`
	Firehose        *FirehoseAction        `json:"firehose,omitempty"`
	IotEvents       *IotEventsAction       `json:"iotEvents,omitempty"`
	IotSiteWise     *IotSiteWiseAction     `json:"iotSiteWise,omitempty"`
	IotTopicPublish *IotTopicPublishAction `json:"iotTopicPublish,omitempty"`
	Lambda          *LambdaAction          `json:"lambda,omitempty"`
	Sns             *SnsTopicPublishAction `json:"sns,omitempty"`
	Sqs             *SqsAction             `json:"sqs,omitempty"`
}
