package shared

type ResultSet struct {
	ResultSetMetadata *ResultSetMetadata `json:"ResultSetMetadata,omitempty"`
	Rows              []Row              `json:"Rows,omitempty"`
}
