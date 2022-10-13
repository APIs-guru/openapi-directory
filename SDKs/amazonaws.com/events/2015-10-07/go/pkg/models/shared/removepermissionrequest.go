package shared

type RemovePermissionRequest struct {
	EventBusName         *string `json:"EventBusName"`
	RemoveAllPermissions *bool   `json:"RemoveAllPermissions"`
	StatementID          *string `json:"StatementId"`
}
