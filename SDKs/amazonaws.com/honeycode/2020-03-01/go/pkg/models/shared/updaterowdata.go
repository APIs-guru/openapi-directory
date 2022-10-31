package shared



type UpdateRowData struct {
    CellsToUpdate map[string]CellInput `json:"cellsToUpdate"`
    RowID string `json:"rowId"`
    
}

