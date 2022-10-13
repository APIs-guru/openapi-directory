package shared

type GetItemInput struct {
	AttributesToGet          []string                    `json:"AttributesToGet"`
	ConsistentRead           *bool                       `json:"ConsistentRead"`
	ExpressionAttributeNames map[string]string           `json:"ExpressionAttributeNames"`
	Key                      map[string]AttributeValue   `json:"Key"`
	ProjectionExpression     *string                     `json:"ProjectionExpression"`
	ReturnConsumedCapacity   *ReturnConsumedCapacityEnum `json:"ReturnConsumedCapacity"`
	TableName                string                      `json:"TableName"`
}
