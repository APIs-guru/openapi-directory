package shared

// BuildStatusConfig
// Contains information that defines how the CodeBuild build project reports the build status to the source provider.
type BuildStatusConfig struct {
	Context   *string `json:"context,omitempty"`
	TargetURL *string `json:"targetUrl,omitempty"`
}
