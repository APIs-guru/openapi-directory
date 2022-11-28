package shared

// HostVolumeProperties
// Details on a container instance bind mount host volume.
type HostVolumeProperties struct {
	SourcePath *string `json:"sourcePath,omitempty"`
}
