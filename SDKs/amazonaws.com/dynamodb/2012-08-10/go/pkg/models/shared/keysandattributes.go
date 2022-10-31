package shared



type KeysAndAttributes struct {
    AttributesToGet []string `json:"AttributesToGet,omitempty"`
    ConsistentRead *bool `json:"ConsistentRead,omitempty"`
    ExpressionAttributeNames map[string]string `json:"ExpressionAttributeNames,omitempty"`
    Keys []map[string]AttributeValue `json:"Keys"`
    ProjectionExpression *string `json:"ProjectionExpression,omitempty"`
    
}

