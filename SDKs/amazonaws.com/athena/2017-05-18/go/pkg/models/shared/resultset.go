package shared

// ResultSet
// The metadata and rows that comprise a query result set. The metadata describes the column structure and data types. To return a <code>ResultSet</code> object, use <a>GetQueryResults</a>.
type ResultSet struct {
	ResultSetMetadata *ResultSetMetadata `json:"ResultSetMetadata,omitempty"`
	Rows              []Row              `json:"Rows,omitempty"`
}
