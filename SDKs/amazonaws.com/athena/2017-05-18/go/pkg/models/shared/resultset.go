package shared

type ResultSet struct {
	ResultSetMetadata *ResultSetMetadata `json:"ResultSetMetadata"`
	Rows              []Row              `json:"Rows"`
}
