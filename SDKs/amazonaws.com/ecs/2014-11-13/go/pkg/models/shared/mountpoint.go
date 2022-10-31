package shared



type MountPoint struct {
    ContainerPath *string `json:"containerPath,omitempty"`
    ReadOnly *bool `json:"readOnly,omitempty"`
    SourceVolume *string `json:"sourceVolume,omitempty"`
    
}

