package shared

type UpsertRowData struct {
	BatchItemID   string               `json:"batchItemId"`
	CellsToUpdate map[string]CellInput `json:"cellsToUpdate"`
	Filter        Filter               `json:"filter"`
}
