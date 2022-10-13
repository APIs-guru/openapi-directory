package shared

type Compatibility struct {
	ClusterVersion   *string  `json:"clusterVersion"`
	DefaultVersion   *bool    `json:"defaultVersion"`
	PlatformVersions []string `json:"platformVersions"`
}
