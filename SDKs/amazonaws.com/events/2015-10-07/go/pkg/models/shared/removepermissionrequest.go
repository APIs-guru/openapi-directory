package shared

type RemovePermissionRequest struct {
	EventBusName         *string `json:"EventBusName,omitempty"`
	RemoveAllPermissions *bool   `json:"RemoveAllPermissions,omitempty"`
	StatementID          *string `json:"StatementId,omitempty"`
}
