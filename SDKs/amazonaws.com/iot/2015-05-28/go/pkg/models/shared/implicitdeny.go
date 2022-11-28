package shared

// ImplicitDeny
// Information that implicitly denies authorization. When policy doesn't explicitly deny or allow an action on a resource it is considered an implicit deny.
type ImplicitDeny struct {
	Policies []Policy `json:"policies,omitempty"`
}
