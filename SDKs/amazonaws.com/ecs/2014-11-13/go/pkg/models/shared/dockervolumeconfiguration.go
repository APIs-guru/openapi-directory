package shared

type DockerVolumeConfiguration struct {
	Autoprovision *bool             `json:"autoprovision,omitempty"`
	Driver        *string           `json:"driver,omitempty"`
	DriverOpts    map[string]string `json:"driverOpts,omitempty"`
	Labels        map[string]string `json:"labels,omitempty"`
	Scope         *ScopeEnum        `json:"scope,omitempty"`
}
