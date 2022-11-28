package shared

type APIModelsUserRoleChangeActionEnum string

const (
	APIModelsUserRoleChangeActionEnumGrant  APIModelsUserRoleChangeActionEnum = "Grant"
	APIModelsUserRoleChangeActionEnumRevoke APIModelsUserRoleChangeActionEnum = "Revoke"
)

type APIModelsUserRoleChange struct {
	Action APIModelsUserRoleChangeActionEnum `json:"Action" form:"name=Action"`
	Name   string                            `json:"Name" form:"name=Name"`
}
