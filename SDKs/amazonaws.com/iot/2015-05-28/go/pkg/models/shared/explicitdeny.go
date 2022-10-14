package shared

type ExplicitDeny struct {
	Policies []Policy `json:"policies,omitempty"`
}
