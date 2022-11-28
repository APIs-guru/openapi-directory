package shared

// Tmpfs
// The container path, mount options, and size of the tmpfs mount.
type Tmpfs struct {
	ContainerPath string   `json:"containerPath"`
	MountOptions  []string `json:"mountOptions,omitempty"`
	Size          int64    `json:"size"`
}
