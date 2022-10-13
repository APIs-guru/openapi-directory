package shared

type ConditionCheck struct {
	ConditionExpression                 string                                   `json:"ConditionExpression"`
	ExpressionAttributeNames            map[string]string                        `json:"ExpressionAttributeNames"`
	ExpressionAttributeValues           map[string]AttributeValue                `json:"ExpressionAttributeValues"`
	Key                                 map[string]AttributeValue                `json:"Key"`
	ReturnValuesOnConditionCheckFailure *ReturnValuesOnConditionCheckFailureEnum `json:"ReturnValuesOnConditionCheckFailure"`
	TableName                           string                                   `json:"TableName"`
}
