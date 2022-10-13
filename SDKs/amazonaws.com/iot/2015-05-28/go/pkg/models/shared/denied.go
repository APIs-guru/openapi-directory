package shared

type Denied struct {
	ExplicitDeny *ExplicitDeny `json:"explicitDeny"`
	ImplicitDeny *ImplicitDeny `json:"implicitDeny"`
}
