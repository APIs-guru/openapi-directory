package shared

type DockerVolumeConfiguration struct {
	Autoprovision *bool             `json:"autoprovision"`
	Driver        *string           `json:"driver"`
	DriverOpts    map[string]string `json:"driverOpts"`
	Labels        map[string]string `json:"labels"`
	Scope         *ScopeEnum        `json:"scope"`
}
