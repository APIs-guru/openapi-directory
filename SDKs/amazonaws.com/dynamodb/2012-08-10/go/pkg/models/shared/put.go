package shared

type Put struct {
	ConditionExpression                 *string                                  `json:"ConditionExpression"`
	ExpressionAttributeNames            map[string]string                        `json:"ExpressionAttributeNames"`
	ExpressionAttributeValues           map[string]AttributeValue                `json:"ExpressionAttributeValues"`
	Item                                map[string]AttributeValue                `json:"Item"`
	ReturnValuesOnConditionCheckFailure *ReturnValuesOnConditionCheckFailureEnum `json:"ReturnValuesOnConditionCheckFailure"`
	TableName                           string                                   `json:"TableName"`
}
