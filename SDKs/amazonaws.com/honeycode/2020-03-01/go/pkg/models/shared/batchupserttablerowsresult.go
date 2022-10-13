package shared

type BatchUpsertTableRowsResult struct {
	FailedBatchItems []FailedBatchItem           `json:"failedBatchItems"`
	Rows             map[string]UpsertRowsResult `json:"rows"`
	WorkbookCursor   int64                       `json:"workbookCursor"`
}
