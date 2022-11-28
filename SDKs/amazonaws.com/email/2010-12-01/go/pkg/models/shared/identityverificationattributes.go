package shared

// IdentityVerificationAttributes
// Represents the verification attributes of a single identity.
type IdentityVerificationAttributes struct {
	VerificationStatus VerificationStatusEnum
	VerificationToken  *string
}
