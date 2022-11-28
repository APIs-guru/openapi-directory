package shared

// Update
// Represents a request to perform an <code>UpdateItem</code> operation.
type Update struct {
	ConditionExpression                 *string                                  `json:"ConditionExpression,omitempty"`
	ExpressionAttributeNames            map[string]string                        `json:"ExpressionAttributeNames,omitempty"`
	ExpressionAttributeValues           map[string]AttributeValue                `json:"ExpressionAttributeValues,omitempty"`
	Key                                 map[string]AttributeValue                `json:"Key"`
	ReturnValuesOnConditionCheckFailure *ReturnValuesOnConditionCheckFailureEnum `json:"ReturnValuesOnConditionCheckFailure,omitempty"`
	TableName                           string                                   `json:"TableName"`
	UpdateExpression                    string                                   `json:"UpdateExpression"`
}
