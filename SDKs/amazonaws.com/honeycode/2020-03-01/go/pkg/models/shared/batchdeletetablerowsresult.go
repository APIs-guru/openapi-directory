package shared

type BatchDeleteTableRowsResult struct {
	FailedBatchItems []FailedBatchItem `json:"failedBatchItems,omitempty"`
	WorkbookCursor   int64             `json:"workbookCursor"`
}
