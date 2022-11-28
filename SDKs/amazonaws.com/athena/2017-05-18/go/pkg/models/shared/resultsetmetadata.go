package shared

// ResultSetMetadata
// The metadata that describes the column structure and data types of a table of query results. To return a <code>ResultSetMetadata</code> object, use <a>GetQueryResults</a>.
type ResultSetMetadata struct {
	ColumnInfo []ColumnInfo `json:"ColumnInfo,omitempty"`
}
