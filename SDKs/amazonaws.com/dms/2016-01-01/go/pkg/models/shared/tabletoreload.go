package shared

// TableToReload
// Provides the name of the schema and table to be reloaded.
type TableToReload struct {
	SchemaName string `json:"SchemaName"`
	TableName  string `json:"TableName"`
}
