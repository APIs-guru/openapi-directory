package shared

type Get struct {
	ExpressionAttributeNames map[string]string         `json:"ExpressionAttributeNames"`
	Key                      map[string]AttributeValue `json:"Key"`
	ProjectionExpression     *string                   `json:"ProjectionExpression"`
	TableName                string                    `json:"TableName"`
}
