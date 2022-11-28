package shared

// Allowed
// Contains information that allowed the authorization.
type Allowed struct {
	Policies []Policy `json:"policies,omitempty"`
}
