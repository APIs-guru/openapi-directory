package shared

// QueryExecutionContext
// The database and data catalog context in which the query execution occurs.
type QueryExecutionContext struct {
	Catalog  *string `json:"Catalog,omitempty"`
	Database *string `json:"Database,omitempty"`
}
