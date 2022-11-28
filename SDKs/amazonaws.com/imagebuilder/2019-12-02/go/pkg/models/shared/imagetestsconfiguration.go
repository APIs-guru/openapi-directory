package shared

// ImageTestsConfiguration
// Image tests configuration.
type ImageTestsConfiguration struct {
	ImageTestsEnabled *bool  `json:"imageTestsEnabled,omitempty"`
	TimeoutMinutes    *int64 `json:"timeoutMinutes,omitempty"`
}
