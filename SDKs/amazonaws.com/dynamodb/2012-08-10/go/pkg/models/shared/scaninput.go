package shared

type ScanInput struct {
	AttributesToGet           []string                    `json:"AttributesToGet"`
	ConditionalOperator       *ConditionalOperatorEnum    `json:"ConditionalOperator"`
	ConsistentRead            *bool                       `json:"ConsistentRead"`
	ExclusiveStartKey         map[string]AttributeValue   `json:"ExclusiveStartKey"`
	ExpressionAttributeNames  map[string]string           `json:"ExpressionAttributeNames"`
	ExpressionAttributeValues map[string]AttributeValue   `json:"ExpressionAttributeValues"`
	FilterExpression          *string                     `json:"FilterExpression"`
	IndexName                 *string                     `json:"IndexName"`
	Limit                     *int64                      `json:"Limit"`
	ProjectionExpression      *string                     `json:"ProjectionExpression"`
	ReturnConsumedCapacity    *ReturnConsumedCapacityEnum `json:"ReturnConsumedCapacity"`
	ScanFilter                map[string]Condition        `json:"ScanFilter"`
	Segment                   *int64                      `json:"Segment"`
	Select                    *SelectEnum                 `json:"Select"`
	TableName                 string                      `json:"TableName"`
	TotalSegments             *int64                      `json:"TotalSegments"`
}
