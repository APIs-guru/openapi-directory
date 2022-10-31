package shared



type BatchCreateTableRowsResult struct {
    CreatedRows map[string]string `json:"createdRows"`
    FailedBatchItems []FailedBatchItem `json:"failedBatchItems,omitempty"`
    WorkbookCursor int64 `json:"workbookCursor"`
    
}

