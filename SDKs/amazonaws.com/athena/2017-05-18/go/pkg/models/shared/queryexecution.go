package shared

type QueryExecution struct {
	EngineVersion         *EngineVersion            `json:"EngineVersion"`
	Query                 *string                   `json:"Query"`
	QueryExecutionContext *QueryExecutionContext    `json:"QueryExecutionContext"`
	QueryExecutionID      *string                   `json:"QueryExecutionId"`
	ResultConfiguration   *ResultConfiguration      `json:"ResultConfiguration"`
	StatementType         *StatementTypeEnum        `json:"StatementType"`
	Statistics            *QueryExecutionStatistics `json:"Statistics"`
	Status                *QueryExecutionStatus     `json:"Status"`
	WorkGroup             *string                   `json:"WorkGroup"`
}
