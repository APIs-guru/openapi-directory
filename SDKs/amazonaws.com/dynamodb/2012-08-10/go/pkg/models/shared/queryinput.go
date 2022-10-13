package shared

type QueryInput struct {
	AttributesToGet           []string                    `json:"AttributesToGet"`
	ConditionalOperator       *ConditionalOperatorEnum    `json:"ConditionalOperator"`
	ConsistentRead            *bool                       `json:"ConsistentRead"`
	ExclusiveStartKey         map[string]AttributeValue   `json:"ExclusiveStartKey"`
	ExpressionAttributeNames  map[string]string           `json:"ExpressionAttributeNames"`
	ExpressionAttributeValues map[string]AttributeValue   `json:"ExpressionAttributeValues"`
	FilterExpression          *string                     `json:"FilterExpression"`
	IndexName                 *string                     `json:"IndexName"`
	KeyConditionExpression    *string                     `json:"KeyConditionExpression"`
	KeyConditions             map[string]Condition        `json:"KeyConditions"`
	Limit                     *int64                      `json:"Limit"`
	ProjectionExpression      *string                     `json:"ProjectionExpression"`
	QueryFilter               map[string]Condition        `json:"QueryFilter"`
	ReturnConsumedCapacity    *ReturnConsumedCapacityEnum `json:"ReturnConsumedCapacity"`
	ScanIndexForward          *bool                       `json:"ScanIndexForward"`
	Select                    *SelectEnum                 `json:"Select"`
	TableName                 string                      `json:"TableName"`
}
