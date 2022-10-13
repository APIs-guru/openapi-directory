package shared

type DynamoDbAction struct {
	HashKeyField  string             `json:"hashKeyField"`
	HashKeyType   *DynamoKeyTypeEnum `json:"hashKeyType"`
	HashKeyValue  string             `json:"hashKeyValue"`
	Operation     *string            `json:"operation"`
	PayloadField  *string            `json:"payloadField"`
	RangeKeyField *string            `json:"rangeKeyField"`
	RangeKeyType  *DynamoKeyTypeEnum `json:"rangeKeyType"`
	RangeKeyValue *string            `json:"rangeKeyValue"`
	RoleArn       string             `json:"roleArn"`
	TableName     string             `json:"tableName"`
}
