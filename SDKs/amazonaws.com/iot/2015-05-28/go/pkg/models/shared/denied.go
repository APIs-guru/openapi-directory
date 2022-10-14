package shared

type Denied struct {
	ExplicitDeny *ExplicitDeny `json:"explicitDeny,omitempty"`
	ImplicitDeny *ImplicitDeny `json:"implicitDeny,omitempty"`
}
