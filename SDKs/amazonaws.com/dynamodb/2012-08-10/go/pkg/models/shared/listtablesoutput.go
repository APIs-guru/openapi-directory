package shared

// ListTablesOutput
// Represents the output of a <code>ListTables</code> operation.
type ListTablesOutput struct {
	LastEvaluatedTableName *string  `json:"LastEvaluatedTableName,omitempty"`
	TableNames             []string `json:"TableNames,omitempty"`
}
