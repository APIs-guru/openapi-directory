package shared



type BatchStatementResponse struct {
    Error *BatchStatementError `json:"Error,omitempty"`
    Item map[string]AttributeValue `json:"Item,omitempty"`
    TableName *string `json:"TableName,omitempty"`
    
}

