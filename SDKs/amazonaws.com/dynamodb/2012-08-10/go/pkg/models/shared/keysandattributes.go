package shared

type KeysAndAttributes struct {
	AttributesToGet          []string                    `json:"AttributesToGet"`
	ConsistentRead           *bool                       `json:"ConsistentRead"`
	ExpressionAttributeNames map[string]string           `json:"ExpressionAttributeNames"`
	Keys                     []map[string]AttributeValue `json:"Keys"`
	ProjectionExpression     *string                     `json:"ProjectionExpression"`
}
