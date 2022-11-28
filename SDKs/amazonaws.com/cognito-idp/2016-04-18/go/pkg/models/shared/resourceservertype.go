package shared

// ResourceServerType
// A container for information about a resource server for a user pool.
type ResourceServerType struct {
	Identifier *string                   `json:"Identifier,omitempty"`
	Name       *string                   `json:"Name,omitempty"`
	Scopes     []ResourceServerScopeType `json:"Scopes,omitempty"`
	UserPoolID *string                   `json:"UserPoolId,omitempty"`
}
