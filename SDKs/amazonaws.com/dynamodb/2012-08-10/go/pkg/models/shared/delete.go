package shared

// Delete
// Represents a request to perform a <code>DeleteItem</code> operation.
type Delete struct {
	ConditionExpression                 *string                                  `json:"ConditionExpression,omitempty"`
	ExpressionAttributeNames            map[string]string                        `json:"ExpressionAttributeNames,omitempty"`
	ExpressionAttributeValues           map[string]AttributeValue                `json:"ExpressionAttributeValues,omitempty"`
	Key                                 map[string]AttributeValue                `json:"Key"`
	ReturnValuesOnConditionCheckFailure *ReturnValuesOnConditionCheckFailureEnum `json:"ReturnValuesOnConditionCheckFailure,omitempty"`
	TableName                           string                                   `json:"TableName"`
}
