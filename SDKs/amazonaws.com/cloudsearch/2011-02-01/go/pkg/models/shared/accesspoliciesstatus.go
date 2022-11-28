package shared

// AccessPoliciesStatus
// A <code>PolicyDocument</code> that specifies access policies for the search domain's services, and the current status of those policies.
type AccessPoliciesStatus struct {
	Options string
	Status  OptionStatus
}
