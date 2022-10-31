package shared

type DynamoDbAction struct {
	HashKeyField  string   `json:"hashKeyField"`
	HashKeyType   *string  `json:"hashKeyType,omitempty"`
	HashKeyValue  string   `json:"hashKeyValue"`
	Operation     *string  `json:"operation,omitempty"`
	Payload       *Payload `json:"payload,omitempty"`
	PayloadField  *string  `json:"payloadField,omitempty"`
	RangeKeyField *string  `json:"rangeKeyField,omitempty"`
	RangeKeyType  *string  `json:"rangeKeyType,omitempty"`
	RangeKeyValue *string  `json:"rangeKeyValue,omitempty"`
	TableName     string   `json:"tableName"`
}
