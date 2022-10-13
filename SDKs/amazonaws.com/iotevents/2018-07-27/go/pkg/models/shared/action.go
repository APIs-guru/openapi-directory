package shared

type Action struct {
	ClearTimer      *ClearTimerAction      `json:"clearTimer"`
	DynamoDb        *DynamoDbAction        `json:"dynamoDB"`
	DynamoDBv2      *DynamoDBv2Action      `json:"dynamoDBv2"`
	Firehose        *FirehoseAction        `json:"firehose"`
	IotEvents       *IotEventsAction       `json:"iotEvents"`
	IotSiteWise     *IotSiteWiseAction     `json:"iotSiteWise"`
	IotTopicPublish *IotTopicPublishAction `json:"iotTopicPublish"`
	Lambda          *LambdaAction          `json:"lambda"`
	ResetTimer      *ResetTimerAction      `json:"resetTimer"`
	SetTimer        *SetTimerAction        `json:"setTimer"`
	SetVariable     *SetVariableAction     `json:"setVariable"`
	Sns             *SnsTopicPublishAction `json:"sns"`
	Sqs             *SqsAction             `json:"sqs"`
}
