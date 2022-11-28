package shared

// Put
// Represents a request to perform a <code>PutItem</code> operation.
type Put struct {
	ConditionExpression                 *string                                  `json:"ConditionExpression,omitempty"`
	ExpressionAttributeNames            map[string]string                        `json:"ExpressionAttributeNames,omitempty"`
	ExpressionAttributeValues           map[string]AttributeValue                `json:"ExpressionAttributeValues,omitempty"`
	Item                                map[string]AttributeValue                `json:"Item"`
	ReturnValuesOnConditionCheckFailure *ReturnValuesOnConditionCheckFailureEnum `json:"ReturnValuesOnConditionCheckFailure,omitempty"`
	TableName                           string                                   `json:"TableName"`
}
