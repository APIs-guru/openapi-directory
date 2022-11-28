package shared

// DeleteDomainResponse
// A response message that contains the status of a newly deleted domain, or no status if the domain has already been completely deleted.
type DeleteDomainResponse struct {
	DomainStatus *DomainStatus
}
