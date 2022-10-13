package shared

type LambdaVolumeMount struct {
	AddGroupOwner   *bool                           `json:"addGroupOwner"`
	DestinationPath string                          `json:"destinationPath"`
	Permission      *LambdaFilesystemPermissionEnum `json:"permission"`
	SourcePath      string                          `json:"sourcePath"`
}
