package shared

// AuthResult
// The authorizer result.
type AuthResult struct {
	Allowed              *Allowed          `json:"allowed,omitempty"`
	AuthDecision         *AuthDecisionEnum `json:"authDecision,omitempty"`
	AuthInfo             *AuthInfo         `json:"authInfo,omitempty"`
	Denied               *Denied           `json:"denied,omitempty"`
	MissingContextValues []string          `json:"missingContextValues,omitempty"`
}
