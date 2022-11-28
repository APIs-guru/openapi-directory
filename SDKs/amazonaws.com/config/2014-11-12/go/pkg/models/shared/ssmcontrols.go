package shared

// SsmControls
// Amazon Web Services Systems Manager (SSM) specific remediation controls.
type SsmControls struct {
	ConcurrentExecutionRatePercentage *int64 `json:"ConcurrentExecutionRatePercentage,omitempty"`
	ErrorPercentage                   *int64 `json:"ErrorPercentage,omitempty"`
}
