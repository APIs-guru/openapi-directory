package shared

// SsoIdentity
// Contains information about your identity source in AWS Single Sign-On. For more information, see the <a href="https://docs.aws.amazon.com/singlesignon/latest/userguide/what-is.html">AWS Single Sign-On User Guide</a>.
type SsoIdentity struct {
	IdentityStoreID string  `json:"identityStoreId"`
	UserID          *string `json:"userId,omitempty"`
}
