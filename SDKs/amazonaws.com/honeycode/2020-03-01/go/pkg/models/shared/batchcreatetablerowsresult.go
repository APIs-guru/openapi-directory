package shared

type BatchCreateTableRowsResult struct {
	CreatedRows      map[string]string `json:"createdRows"`
	FailedBatchItems []FailedBatchItem `json:"failedBatchItems"`
	WorkbookCursor   int64             `json:"workbookCursor"`
}
