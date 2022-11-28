package shared

// ListPoliciesGrantingServiceAccessEntry
// <p>Contains details about the permissions policies that are attached to the specified identity (user, group, or role).</p> <p>This data type is used as a response element in the <a>ListPoliciesGrantingServiceAccess</a> operation.</p>
type ListPoliciesGrantingServiceAccessEntry struct {
	Policies         []PolicyGrantingServiceAccess
	ServiceNamespace *string
}
