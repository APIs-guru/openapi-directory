package shared

// DockerVolumeConfiguration
// This parameter is specified when you are using Docker volumes. Docker volumes are only supported when you are using the EC2 launch type. Windows containers only support the use of the <code>local</code> driver. To use bind mounts, specify a <code>host</code> instead.
type DockerVolumeConfiguration struct {
	Autoprovision *bool             `json:"autoprovision,omitempty"`
	Driver        *string           `json:"driver,omitempty"`
	DriverOpts    map[string]string `json:"driverOpts,omitempty"`
	Labels        map[string]string `json:"labels,omitempty"`
	Scope         *ScopeEnum        `json:"scope,omitempty"`
}
