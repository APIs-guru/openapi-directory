package shared

// VerifyDomainIdentityResponse
// Returns a TXT record that you must publish to the DNS server of your domain to complete domain verification with Amazon SES.
type VerifyDomainIdentityResponse struct {
	VerificationToken string
}
