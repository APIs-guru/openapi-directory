package shared

// Device
// <p>An object representing a container instance host device.</p> <note> <p>This object isn't applicable to jobs that are running on Fargate resources and shouldn't be provided.</p> </note>
type Device struct {
	ContainerPath *string                      `json:"containerPath,omitempty"`
	HostPath      string                       `json:"hostPath"`
	Permissions   []DeviceCgroupPermissionEnum `json:"permissions,omitempty"`
}
