package shared

// UpdateRowData
//
//	Data needed to create a single row in a table as part of the BatchCreateTableRows request.
type UpdateRowData struct {
	CellsToUpdate map[string]CellInput `json:"cellsToUpdate"`
	RowID         string               `json:"rowId"`
}
