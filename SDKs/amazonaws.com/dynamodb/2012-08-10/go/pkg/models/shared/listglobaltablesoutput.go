package shared



type ListGlobalTablesOutput struct {
    GlobalTables []GlobalTable `json:"GlobalTables,omitempty"`
    LastEvaluatedGlobalTableName *string `json:"LastEvaluatedGlobalTableName,omitempty"`
    
}

