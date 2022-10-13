package shared

type ImageTestsConfiguration struct {
	ImageTestsEnabled *bool  `json:"imageTestsEnabled"`
	TimeoutMinutes    *int64 `json:"timeoutMinutes"`
}
