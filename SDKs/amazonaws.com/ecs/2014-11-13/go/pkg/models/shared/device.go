package shared

type Device struct {
	ContainerPath *string                      `json:"containerPath"`
	HostPath      string                       `json:"hostPath"`
	Permissions   []DeviceCgroupPermissionEnum `json:"permissions"`
}
