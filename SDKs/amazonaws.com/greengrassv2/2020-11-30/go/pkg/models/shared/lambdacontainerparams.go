package shared

type LambdaContainerParams struct {
	Devices        []LambdaDeviceMount `json:"devices"`
	MemorySizeInKb *int64              `json:"memorySizeInKB"`
	MountRoSysfs   *bool               `json:"mountROSysfs"`
	Volumes        []LambdaVolumeMount `json:"volumes"`
}
