package shared

// DescribeDomainsResponse
// The result of a <code>DescribeDomains</code> request. Contains the status of the domains specified in the request or all domains owned by the account.
type DescribeDomainsResponse struct {
	DomainStatusList []DomainStatus
}
