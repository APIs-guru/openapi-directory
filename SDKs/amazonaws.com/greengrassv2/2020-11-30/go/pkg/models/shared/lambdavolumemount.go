package shared

type LambdaVolumeMount struct {
	AddGroupOwner   *bool                           `json:"addGroupOwner,omitempty"`
	DestinationPath string                          `json:"destinationPath"`
	Permission      *LambdaFilesystemPermissionEnum `json:"permission,omitempty"`
	SourcePath      string                          `json:"sourcePath"`
}
