package shared

// RecipientDetail
// The information that identifies the recipient.
type RecipientDetail struct {
	SsoIdentity *SsoIdentity `json:"ssoIdentity,omitempty"`
}
