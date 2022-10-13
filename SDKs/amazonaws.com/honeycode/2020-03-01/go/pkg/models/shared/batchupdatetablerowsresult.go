package shared

type BatchUpdateTableRowsResult struct {
	FailedBatchItems []FailedBatchItem `json:"failedBatchItems"`
	WorkbookCursor   int64             `json:"workbookCursor"`
}
