package shared

type LambdaDeviceMount struct {
	AddGroupOwner *bool                           `json:"addGroupOwner"`
	Path          string                          `json:"path"`
	Permission    *LambdaFilesystemPermissionEnum `json:"permission"`
}
