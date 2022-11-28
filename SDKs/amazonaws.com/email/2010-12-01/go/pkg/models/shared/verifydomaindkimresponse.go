package shared

// VerifyDomainDkimResponse
// Returns CNAME records that you must publish to the DNS server of your domain to set up Easy DKIM with Amazon SES.
type VerifyDomainDkimResponse struct {
	DkimTokens []string
}
