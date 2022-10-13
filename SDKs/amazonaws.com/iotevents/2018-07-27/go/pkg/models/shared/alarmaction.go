package shared

type AlarmAction struct {
	DynamoDb        *DynamoDbAction        `json:"dynamoDB"`
	DynamoDBv2      *DynamoDBv2Action      `json:"dynamoDBv2"`
	Firehose        *FirehoseAction        `json:"firehose"`
	IotEvents       *IotEventsAction       `json:"iotEvents"`
	IotSiteWise     *IotSiteWiseAction     `json:"iotSiteWise"`
	IotTopicPublish *IotTopicPublishAction `json:"iotTopicPublish"`
	Lambda          *LambdaAction          `json:"lambda"`
	Sns             *SnsTopicPublishAction `json:"sns"`
	Sqs             *SqsAction             `json:"sqs"`
}
