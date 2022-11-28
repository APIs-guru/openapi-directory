package shared

// LambdaVolumeMount
// Contains information about a volume that Linux processes in a container can access. When you define a volume, the IoT Greengrass Core software mounts the source files to the destination inside the container.
type LambdaVolumeMount struct {
	AddGroupOwner   *bool                           `json:"addGroupOwner,omitempty"`
	DestinationPath string                          `json:"destinationPath"`
	Permission      *LambdaFilesystemPermissionEnum `json:"permission,omitempty"`
	SourcePath      string                          `json:"sourcePath"`
}
