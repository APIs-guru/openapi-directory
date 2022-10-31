package shared

type ResultSet struct {
	Headers []ColumnMetadata `json:"headers"`
	Rows    []ResultRow      `json:"rows"`
}
