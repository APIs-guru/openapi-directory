package shared

// PutItemInput
// The input for the DynamoActionVS action that specifies the DynamoDB table to which the message data will be written.
type PutItemInput struct {
	TableName string `json:"tableName"`
}
