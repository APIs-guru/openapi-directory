package shared

// DynamoDBv2Action
// <p>Describes an action to write to a DynamoDB table.</p> <p>This DynamoDB action writes each attribute in the message payload into it's own column in the DynamoDB table.</p>
type DynamoDBv2Action struct {
	PutItem PutItemInput `json:"putItem"`
	RoleArn string       `json:"roleArn"`
}
