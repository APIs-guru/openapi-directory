package shared

// Device
// An object representing a container instance host device.
type Device struct {
	ContainerPath *string                      `json:"containerPath,omitempty"`
	HostPath      string                       `json:"hostPath"`
	Permissions   []DeviceCgroupPermissionEnum `json:"permissions,omitempty"`
}
