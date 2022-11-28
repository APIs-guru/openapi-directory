package shared

// MountPoint
// Details on a Docker volume mount point that's used in a job's container properties. This parameter maps to <code>Volumes</code> in the <a href="https://docs.docker.com/engine/reference/api/docker_remote_api_v1.19/#create-a-container">Create a container</a> section of the Docker Remote API and the <code>--volume</code> option to docker run.
type MountPoint struct {
	ContainerPath *string `json:"containerPath,omitempty"`
	ReadOnly      *bool   `json:"readOnly,omitempty"`
	SourceVolume  *string `json:"sourceVolume,omitempty"`
}
