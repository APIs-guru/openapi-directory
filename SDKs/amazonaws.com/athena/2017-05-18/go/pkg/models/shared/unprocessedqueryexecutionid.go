package shared

// UnprocessedQueryExecutionID
// Describes a query execution that failed to process.
type UnprocessedQueryExecutionID struct {
	ErrorCode        *string `json:"ErrorCode,omitempty"`
	ErrorMessage     *string `json:"ErrorMessage,omitempty"`
	QueryExecutionID *string `json:"QueryExecutionId,omitempty"`
}
