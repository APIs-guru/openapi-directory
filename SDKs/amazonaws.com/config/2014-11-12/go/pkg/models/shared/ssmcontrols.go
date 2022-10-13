package shared

type SsmControls struct {
	ConcurrentExecutionRatePercentage *int64 `json:"ConcurrentExecutionRatePercentage"`
	ErrorPercentage                   *int64 `json:"ErrorPercentage"`
}
