package shared

type UnprocessedQueryExecutionID struct {
	ErrorCode        *string `json:"ErrorCode"`
	ErrorMessage     *string `json:"ErrorMessage"`
	QueryExecutionID *string `json:"QueryExecutionId"`
}
