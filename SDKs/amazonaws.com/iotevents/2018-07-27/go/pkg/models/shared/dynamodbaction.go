package shared

type DynamoDbAction struct {
	HashKeyField  string   `json:"hashKeyField"`
	HashKeyType   *string  `json:"hashKeyType"`
	HashKeyValue  string   `json:"hashKeyValue"`
	Operation     *string  `json:"operation"`
	Payload       *Payload `json:"payload"`
	PayloadField  *string  `json:"payloadField"`
	RangeKeyField *string  `json:"rangeKeyField"`
	RangeKeyType  *string  `json:"rangeKeyType"`
	RangeKeyValue *string  `json:"rangeKeyValue"`
	TableName     string   `json:"tableName"`
}
