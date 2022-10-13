package shared

type BatchGetQueryExecutionOutput struct {
	QueryExecutions              []QueryExecution              `json:"QueryExecutions"`
	UnprocessedQueryExecutionIds []UnprocessedQueryExecutionID `json:"UnprocessedQueryExecutionIds"`
}
