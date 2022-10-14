package shared

type BuildStatusConfig struct {
	Context   *string `json:"context,omitempty"`
	TargetURL *string `json:"targetUrl,omitempty"`
}
