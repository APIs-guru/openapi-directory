package shared

// DeleteDomainResponse
// The result of a <code>DeleteDomain</code> request. Contains the status of a newly deleted domain, or no status if the domain has already been completely deleted.
type DeleteDomainResponse struct {
	DomainStatus *DomainStatus
}
