package shared

type BulkDeploymentMetrics struct {
	InvalidInputRecords *int64 `json:"InvalidInputRecords"`
	RecordsProcessed    *int64 `json:"RecordsProcessed"`
	RetryAttempts       *int64 `json:"RetryAttempts"`
}
