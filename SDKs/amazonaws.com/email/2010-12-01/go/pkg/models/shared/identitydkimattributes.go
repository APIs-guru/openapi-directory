package shared

// IdentityDkimAttributes
// Represents the DKIM attributes of a verified email address or a domain.
type IdentityDkimAttributes struct {
	DkimEnabled            bool
	DkimTokens             []string
	DkimVerificationStatus VerificationStatusEnum
}
