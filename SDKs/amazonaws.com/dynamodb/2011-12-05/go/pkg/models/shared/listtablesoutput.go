package shared



type ListTablesOutput struct {
    LastEvaluatedTableName *string `json:"LastEvaluatedTableName,omitempty"`
    TableNames []string `json:"TableNames,omitempty"`
    
}

