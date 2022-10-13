package shared

type UpdateResourceServerRequest struct {
	Identifier string                    `json:"Identifier"`
	Name       string                    `json:"Name"`
	Scopes     []ResourceServerScopeType `json:"Scopes"`
	UserPoolID string                    `json:"UserPoolId"`
}
