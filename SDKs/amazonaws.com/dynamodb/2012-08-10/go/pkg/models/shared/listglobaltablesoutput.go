package shared

type ListGlobalTablesOutput struct {
	GlobalTables                 []GlobalTable `json:"GlobalTables"`
	LastEvaluatedGlobalTableName *string       `json:"LastEvaluatedGlobalTableName"`
}
