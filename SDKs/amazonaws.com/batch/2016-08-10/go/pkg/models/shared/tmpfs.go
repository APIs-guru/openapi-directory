package shared

type Tmpfs struct {
	ContainerPath string   `json:"containerPath"`
	MountOptions  []string `json:"mountOptions"`
	Size          int64    `json:"size"`
}
