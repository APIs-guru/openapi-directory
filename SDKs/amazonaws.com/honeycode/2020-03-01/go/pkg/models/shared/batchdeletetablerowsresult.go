package shared

type BatchDeleteTableRowsResult struct {
	FailedBatchItems []FailedBatchItem `json:"failedBatchItems"`
	WorkbookCursor   int64             `json:"workbookCursor"`
}
