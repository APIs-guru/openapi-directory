package shared



type Device struct {
    ContainerPath *string `json:"containerPath,omitempty"`
    HostPath string `json:"hostPath"`
    Permissions []DeviceCgroupPermissionEnum `json:"permissions,omitempty"`
    
}

