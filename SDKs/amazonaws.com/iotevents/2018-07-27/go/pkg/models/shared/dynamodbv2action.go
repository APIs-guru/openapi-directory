package shared

type DynamoDBv2Action struct {
	Payload   *Payload `json:"payload,omitempty"`
	TableName string   `json:"tableName"`
}
