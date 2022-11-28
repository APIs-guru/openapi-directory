package shared

// DynamoDbAction
// <p>Describes an action to write to a DynamoDB table.</p> <p>The <code>tableName</code>, <code>hashKeyField</code>, and <code>rangeKeyField</code> values must match the values used when you created the table.</p> <p>The <code>hashKeyValue</code> and <code>rangeKeyvalue</code> fields use a substitution template syntax. These templates provide data at runtime. The syntax is as follows: ${<i>sql-expression</i>}.</p> <p>You can specify any valid expression in a WHERE or SELECT clause, including JSON properties, comparisons, calculations, and functions. For example, the following field uses the third level of the topic:</p> <p> <code>"hashKeyValue": "${topic(3)}"</code> </p> <p>The following field uses the timestamp:</p> <p> <code>"rangeKeyValue": "${timestamp()}"</code> </p>
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
