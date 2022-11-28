package shared

// GetIdentityVerificationAttributesResponse
// The Amazon SES verification status of a list of identities. For domain identities, this response also contains the verification token.
type GetIdentityVerificationAttributesResponse struct {
	VerificationAttributes map[string]IdentityVerificationAttributes
}
