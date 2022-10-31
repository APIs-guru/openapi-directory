package shared

type BatchGetQueryExecutionOutput struct {
	QueryExecutions              []QueryExecution              `json:"QueryExecutions,omitempty"`
	UnprocessedQueryExecutionIds []UnprocessedQueryExecutionID `json:"UnprocessedQueryExecutionIds,omitempty"`
}
