package shared

// QueryInput
// Represents the input of a <code>Query</code> operation.
type QueryInput struct {
	AttributesToGet           []string                    `json:"AttributesToGet,omitempty"`
	ConditionalOperator       *ConditionalOperatorEnum    `json:"ConditionalOperator,omitempty"`
	ConsistentRead            *bool                       `json:"ConsistentRead,omitempty"`
	ExclusiveStartKey         map[string]AttributeValue   `json:"ExclusiveStartKey,omitempty"`
	ExpressionAttributeNames  map[string]string           `json:"ExpressionAttributeNames,omitempty"`
	ExpressionAttributeValues map[string]AttributeValue   `json:"ExpressionAttributeValues,omitempty"`
	FilterExpression          *string                     `json:"FilterExpression,omitempty"`
	IndexName                 *string                     `json:"IndexName,omitempty"`
	KeyConditionExpression    *string                     `json:"KeyConditionExpression,omitempty"`
	KeyConditions             map[string]Condition        `json:"KeyConditions,omitempty"`
	Limit                     *int64                      `json:"Limit,omitempty"`
	ProjectionExpression      *string                     `json:"ProjectionExpression,omitempty"`
	QueryFilter               map[string]Condition        `json:"QueryFilter,omitempty"`
	ReturnConsumedCapacity    *ReturnConsumedCapacityEnum `json:"ReturnConsumedCapacity,omitempty"`
	ScanIndexForward          *bool                       `json:"ScanIndexForward,omitempty"`
	Select                    *SelectEnum                 `json:"Select,omitempty"`
	TableName                 string                      `json:"TableName"`
}
