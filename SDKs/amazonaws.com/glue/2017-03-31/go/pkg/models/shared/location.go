package shared

type Location struct {
	DynamoDb []CodeGenNodeArg `json:"DynamoDB"`
	Jdbc     []CodeGenNodeArg `json:"Jdbc"`
	S3       []CodeGenNodeArg `json:"S3"`
}
