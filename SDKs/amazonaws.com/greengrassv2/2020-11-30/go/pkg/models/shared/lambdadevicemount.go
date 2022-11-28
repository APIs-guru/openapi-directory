package shared

// LambdaDeviceMount
// Contains information about a device that Linux processes in a container can access.
type LambdaDeviceMount struct {
	AddGroupOwner *bool                           `json:"addGroupOwner,omitempty"`
	Path          string                          `json:"path"`
	Permission    *LambdaFilesystemPermissionEnum `json:"permission,omitempty"`
}
