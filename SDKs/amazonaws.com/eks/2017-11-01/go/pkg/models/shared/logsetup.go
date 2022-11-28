package shared

// LogSetup
// An object representing the enabled or disabled Kubernetes control plane logs for your cluster.
type LogSetup struct {
	Enabled *bool         `json:"enabled,omitempty"`
	Types   []LogTypeEnum `json:"types,omitempty"`
}
