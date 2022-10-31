package shared



type Get struct {
    ExpressionAttributeNames map[string]string `json:"ExpressionAttributeNames,omitempty"`
    Key map[string]AttributeValue `json:"Key"`
    ProjectionExpression *string `json:"ProjectionExpression,omitempty"`
    TableName string `json:"TableName"`
    
}

