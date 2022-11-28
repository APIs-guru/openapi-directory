package shared

// ResultRow
// A single row in the ResultSet.
type ResultRow struct {
	DataItems []DataItem `json:"dataItems"`
	RowID     *string    `json:"rowId,omitempty"`
}
