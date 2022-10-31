package shared



type GetItemInput struct {
    AttributesToGet []string `json:"AttributesToGet,omitempty"`
    ConsistentRead *bool `json:"ConsistentRead,omitempty"`
    ExpressionAttributeNames map[string]string `json:"ExpressionAttributeNames,omitempty"`
    Key map[string]AttributeValue `json:"Key"`
    ProjectionExpression *string `json:"ProjectionExpression,omitempty"`
    ReturnConsumedCapacity *ReturnConsumedCapacityEnum `json:"ReturnConsumedCapacity,omitempty"`
    TableName string `json:"TableName"`
    
}

