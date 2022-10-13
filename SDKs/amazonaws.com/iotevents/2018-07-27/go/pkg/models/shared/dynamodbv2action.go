package shared

type DynamoDBv2Action struct {
	Payload   *Payload `json:"payload"`
	TableName string   `json:"tableName"`
}
