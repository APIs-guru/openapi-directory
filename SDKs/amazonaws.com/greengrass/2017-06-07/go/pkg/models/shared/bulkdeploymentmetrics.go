package shared

type BulkDeploymentMetrics struct {
	InvalidInputRecords *int64 `json:"InvalidInputRecords,omitempty"`
	RecordsProcessed    *int64 `json:"RecordsProcessed,omitempty"`
	RetryAttempts       *int64 `json:"RetryAttempts,omitempty"`
}
