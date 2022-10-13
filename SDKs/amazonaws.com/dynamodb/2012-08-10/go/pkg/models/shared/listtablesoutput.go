package shared

type ListTablesOutput struct {
	LastEvaluatedTableName *string  `json:"LastEvaluatedTableName"`
	TableNames             []string `json:"TableNames"`
}
