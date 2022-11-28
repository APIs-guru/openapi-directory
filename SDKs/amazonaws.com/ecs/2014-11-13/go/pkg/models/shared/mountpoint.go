package shared

// MountPoint
// Details on a volume mount point that is used in a container definition.
type MountPoint struct {
	ContainerPath *string `json:"containerPath,omitempty"`
	ReadOnly      *bool   `json:"readOnly,omitempty"`
	SourceVolume  *string `json:"sourceVolume,omitempty"`
}
