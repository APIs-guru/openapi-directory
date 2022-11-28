package shared

// SubjectAlternativeNames
// An object that represents the subject alternative names secured by the certificate.
type SubjectAlternativeNames struct {
	Match SubjectAlternativeNameMatchers `json:"match"`
}
