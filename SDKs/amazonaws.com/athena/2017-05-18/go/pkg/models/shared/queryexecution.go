package shared

type QueryExecution struct {
	EngineVersion         *EngineVersion            `json:"EngineVersion,omitempty"`
	Query                 *string                   `json:"Query,omitempty"`
	QueryExecutionContext *QueryExecutionContext    `json:"QueryExecutionContext,omitempty"`
	QueryExecutionID      *string                   `json:"QueryExecutionId,omitempty"`
	ResultConfiguration   *ResultConfiguration      `json:"ResultConfiguration,omitempty"`
	StatementType         *StatementTypeEnum        `json:"StatementType,omitempty"`
	Statistics            *QueryExecutionStatistics `json:"Statistics,omitempty"`
	Status                *QueryExecutionStatus     `json:"Status,omitempty"`
	WorkGroup             *string                   `json:"WorkGroup,omitempty"`
}
