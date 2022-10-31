package shared



type LambdaContainerParams struct {
    Devices []LambdaDeviceMount `json:"devices,omitempty"`
    MemorySizeInKb *int64 `json:"memorySizeInKB,omitempty"`
    MountRoSysfs *bool `json:"mountROSysfs,omitempty"`
    Volumes []LambdaVolumeMount `json:"volumes,omitempty"`
    
}

