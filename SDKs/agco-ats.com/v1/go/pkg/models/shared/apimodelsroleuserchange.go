package shared

type APIModelsRoleUserChangeActionEnum string

const (
	APIModelsRoleUserChangeActionEnumGrant  APIModelsRoleUserChangeActionEnum = "Grant"
	APIModelsRoleUserChangeActionEnumRevoke APIModelsRoleUserChangeActionEnum = "Revoke"
)

type APIModelsRoleUserChange struct {
	Action APIModelsRoleUserChangeActionEnum `json:"Action" form:"name=Action"`
	ID     int32                             `json:"Id" form:"name=Id"`
}
