package shared

// UpsertRowData
//
//	Data needed to upsert rows in a table as part of a single item in the BatchUpsertTableRows request.
type UpsertRowData struct {
	BatchItemID   string               `json:"batchItemId"`
	CellsToUpdate map[string]CellInput `json:"cellsToUpdate"`
	Filter        Filter               `json:"filter"`
}
