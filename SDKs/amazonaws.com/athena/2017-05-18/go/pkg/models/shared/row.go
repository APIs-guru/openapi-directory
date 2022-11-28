package shared

// Row
// The rows that comprise a query result table.
type Row struct {
	Data []Datum `json:"Data,omitempty"`
}
