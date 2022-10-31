package shared

type ResourceServerType struct {
	Identifier *string                   `json:"Identifier,omitempty"`
	Name       *string                   `json:"Name,omitempty"`
	Scopes     []ResourceServerScopeType `json:"Scopes,omitempty"`
	UserPoolID *string                   `json:"UserPoolId,omitempty"`
}
