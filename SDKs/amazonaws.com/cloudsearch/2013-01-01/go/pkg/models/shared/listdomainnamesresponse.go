package shared

// ListDomainNamesResponse
// The result of a <code>ListDomainNames</code> request. Contains a list of the domains owned by an account.
type ListDomainNamesResponse struct {
	DomainNames map[string]string
}
