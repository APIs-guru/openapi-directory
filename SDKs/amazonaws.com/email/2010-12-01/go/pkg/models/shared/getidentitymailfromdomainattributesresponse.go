package shared

// GetIdentityMailFromDomainAttributesResponse
// Represents the custom MAIL FROM attributes for a list of identities.
type GetIdentityMailFromDomainAttributesResponse struct {
	MailFromDomainAttributes map[string]IdentityMailFromDomainAttributes
}
