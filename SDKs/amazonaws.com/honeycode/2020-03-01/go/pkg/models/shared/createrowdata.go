package shared



type CreateRowData struct {
    BatchItemID string `json:"batchItemId"`
    CellsToCreate map[string]CellInput `json:"cellsToCreate"`
    
}

