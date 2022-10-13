package shared

type ResourceDownloadOwnerSetting struct {
	GroupOwner      string         `json:"GroupOwner"`
	GroupPermission PermissionEnum `json:"GroupPermission"`
}
