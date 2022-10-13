package shared

type BatchStatementResponse struct {
	Error     *BatchStatementError      `json:"Error"`
	Item      map[string]AttributeValue `json:"Item"`
	TableName *string                   `json:"TableName"`
}
