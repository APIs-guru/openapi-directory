package shared

// DynamoDbSettings
// Provides the Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role used to define an Amazon DynamoDB target endpoint.
type DynamoDbSettings struct {
	ServiceAccessRoleArn string `json:"ServiceAccessRoleArn"`
}
