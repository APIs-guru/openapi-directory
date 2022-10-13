package shared

type AuthResult struct {
	Allowed              *Allowed          `json:"allowed"`
	AuthDecision         *AuthDecisionEnum `json:"authDecision"`
	AuthInfo             *AuthInfo         `json:"authInfo"`
	Denied               *Denied           `json:"denied"`
	MissingContextValues []string          `json:"missingContextValues"`
}
