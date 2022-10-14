package shared

type BatchUpdateTableRowsResult struct {
	FailedBatchItems []FailedBatchItem `json:"failedBatchItems,omitempty"`
	WorkbookCursor   int64             `json:"workbookCursor"`
}
