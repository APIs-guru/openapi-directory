package shared

// ResultSet
//
//	ResultSet contains the results of the request for a single block or list defined on the screen.
type ResultSet struct {
	Headers []ColumnMetadata `json:"headers"`
	Rows    []ResultRow      `json:"rows"`
}
