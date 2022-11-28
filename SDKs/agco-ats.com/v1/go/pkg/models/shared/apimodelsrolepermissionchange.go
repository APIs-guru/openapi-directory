package shared

type APIModelsRolePermissionChangeActionEnum string

const (
	APIModelsRolePermissionChangeActionEnumGrant  APIModelsRolePermissionChangeActionEnum = "Grant"
	APIModelsRolePermissionChangeActionEnumRevoke APIModelsRolePermissionChangeActionEnum = "Revoke"
)

// APIModelsRolePermissionChange
// Change to the Permissions that a Role is given.
type APIModelsRolePermissionChange struct {
	Action     APIModelsRolePermissionChangeActionEnum `json:"Action" form:"name=Action"`
	Permission string                                  `json:"Permission" form:"name=Permission"`
}
