package shared

// ExplicitDeny
// Information that explicitly denies authorization.
type ExplicitDeny struct {
	Policies []Policy `json:"policies,omitempty"`
}
