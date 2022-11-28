package shared

// LambdaContainerParams
// Contains information about a container in which Lambda functions run on Greengrass core devices.
type LambdaContainerParams struct {
	Devices        []LambdaDeviceMount `json:"devices,omitempty"`
	MemorySizeInKb *int64              `json:"memorySizeInKB,omitempty"`
	MountRoSysfs   *bool               `json:"mountROSysfs,omitempty"`
	Volumes        []LambdaVolumeMount `json:"volumes,omitempty"`
}
