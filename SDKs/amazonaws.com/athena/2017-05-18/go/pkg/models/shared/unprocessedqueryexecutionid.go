package shared



type UnprocessedQueryExecutionID struct {
    ErrorCode *string `json:"ErrorCode,omitempty"`
    ErrorMessage *string `json:"ErrorMessage,omitempty"`
    QueryExecutionID *string `json:"QueryExecutionId,omitempty"`
    
}

