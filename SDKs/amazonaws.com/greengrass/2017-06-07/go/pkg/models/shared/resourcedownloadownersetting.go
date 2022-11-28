package shared

// ResourceDownloadOwnerSetting
// The owner setting for downloaded machine learning resources.
type ResourceDownloadOwnerSetting struct {
	GroupOwner      string         `json:"GroupOwner"`
	GroupPermission PermissionEnum `json:"GroupPermission"`
}
