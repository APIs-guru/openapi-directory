package shared

// JdbcTarget
// Specifies a JDBC data store to crawl.
type JdbcTarget struct {
	ConnectionName *string  `json:"ConnectionName,omitempty"`
	Exclusions     []string `json:"Exclusions,omitempty"`
	Path           *string  `json:"Path,omitempty"`
}
