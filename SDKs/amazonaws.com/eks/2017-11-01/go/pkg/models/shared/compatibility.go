package shared

// Compatibility
// Compatibility information.
type Compatibility struct {
	ClusterVersion   *string  `json:"clusterVersion,omitempty"`
	DefaultVersion   *bool    `json:"defaultVersion,omitempty"`
	PlatformVersions []string `json:"platformVersions,omitempty"`
}
