package shared

// ScanInput
// Represents the input of a <code>Scan</code> operation.
type ScanInput struct {
	AttributesToGet           []string                    `json:"AttributesToGet,omitempty"`
	ConditionalOperator       *ConditionalOperatorEnum    `json:"ConditionalOperator,omitempty"`
	ConsistentRead            *bool                       `json:"ConsistentRead,omitempty"`
	ExclusiveStartKey         map[string]AttributeValue   `json:"ExclusiveStartKey,omitempty"`
	ExpressionAttributeNames  map[string]string           `json:"ExpressionAttributeNames,omitempty"`
	ExpressionAttributeValues map[string]AttributeValue   `json:"ExpressionAttributeValues,omitempty"`
	FilterExpression          *string                     `json:"FilterExpression,omitempty"`
	IndexName                 *string                     `json:"IndexName,omitempty"`
	Limit                     *int64                      `json:"Limit,omitempty"`
	ProjectionExpression      *string                     `json:"ProjectionExpression,omitempty"`
	ReturnConsumedCapacity    *ReturnConsumedCapacityEnum `json:"ReturnConsumedCapacity,omitempty"`
	ScanFilter                map[string]Condition        `json:"ScanFilter,omitempty"`
	Segment                   *int64                      `json:"Segment,omitempty"`
	Select                    *SelectEnum                 `json:"Select,omitempty"`
	TableName                 string                      `json:"TableName"`
	TotalSegments             *int64                      `json:"TotalSegments,omitempty"`
}
