package shared

// AccessPoliciesStatus
// The configured access rules for the domain's document and search endpoints, and the current status of those rules.
type AccessPoliciesStatus struct {
	Options string
	Status  OptionStatus
}
