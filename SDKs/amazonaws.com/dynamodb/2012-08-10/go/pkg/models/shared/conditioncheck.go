package shared

// ConditionCheck
// Represents a request to perform a check that an item exists or to check the condition of specific attributes of the item.
type ConditionCheck struct {
	ConditionExpression                 string                                   `json:"ConditionExpression"`
	ExpressionAttributeNames            map[string]string                        `json:"ExpressionAttributeNames,omitempty"`
	ExpressionAttributeValues           map[string]AttributeValue                `json:"ExpressionAttributeValues,omitempty"`
	Key                                 map[string]AttributeValue                `json:"Key"`
	ReturnValuesOnConditionCheckFailure *ReturnValuesOnConditionCheckFailureEnum `json:"ReturnValuesOnConditionCheckFailure,omitempty"`
	TableName                           string                                   `json:"TableName"`
}
