package shared

type APIModelsUserEffectivePermission struct {
	PermissionID   *int32  `json:"PermissionId"`
	PermissionName *string `json:"PermissionName"`
	UserID         *int32  `json:"UserID"`
}
