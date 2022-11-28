package shared

// TableRow
// An object that contains attributes about a single row in a table
type TableRow struct {
	Cells []Cell `json:"cells"`
	RowID string `json:"rowId"`
}
