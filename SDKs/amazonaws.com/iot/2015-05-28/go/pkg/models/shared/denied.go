package shared

// Denied
// Contains information that denied the authorization.
type Denied struct {
	ExplicitDeny *ExplicitDeny `json:"explicitDeny,omitempty"`
	ImplicitDeny *ImplicitDeny `json:"implicitDeny,omitempty"`
}
