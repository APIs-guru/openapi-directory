package shared

// CreateRowData
//
//	Data needed to create a single row in a table as part of the BatchCreateTableRows request.
type CreateRowData struct {
	BatchItemID   string               `json:"batchItemId"`
	CellsToCreate map[string]CellInput `json:"cellsToCreate"`
}
