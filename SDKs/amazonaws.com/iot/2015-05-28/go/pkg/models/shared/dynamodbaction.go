package shared

type DynamoDbAction struct {
	HashKeyField  string             `json:"hashKeyField"`
	HashKeyType   *DynamoKeyTypeEnum `json:"hashKeyType,omitempty"`
	HashKeyValue  string             `json:"hashKeyValue"`
	Operation     *string            `json:"operation,omitempty"`
	PayloadField  *string            `json:"payloadField,omitempty"`
	RangeKeyField *string            `json:"rangeKeyField,omitempty"`
	RangeKeyType  *DynamoKeyTypeEnum `json:"rangeKeyType,omitempty"`
	RangeKeyValue *string            `json:"rangeKeyValue,omitempty"`
	RoleArn       string             `json:"roleArn"`
	TableName     string             `json:"tableName"`
}
