package shared

type MountPoint struct {
	ContainerPath *string `json:"containerPath"`
	ReadOnly      *bool   `json:"readOnly"`
	SourceVolume  *string `json:"sourceVolume"`
}
