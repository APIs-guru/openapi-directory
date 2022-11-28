package shared

// ListTablesInput
// Represents the input of a <code>ListTables</code> operation.
type ListTablesInput struct {
	ExclusiveStartTableName *string `json:"ExclusiveStartTableName,omitempty"`
	Limit                   *int64  `json:"Limit,omitempty"`
}
