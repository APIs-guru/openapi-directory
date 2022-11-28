package shared

// Tmpfs
// <p>The container path, mount options, and size of the tmpfs mount.</p> <note> <p>This object isn't applicable to jobs that are running on Fargate resources.</p> </note>
type Tmpfs struct {
	ContainerPath string   `json:"containerPath"`
	MountOptions  []string `json:"mountOptions,omitempty"`
	Size          int64    `json:"size"`
}
