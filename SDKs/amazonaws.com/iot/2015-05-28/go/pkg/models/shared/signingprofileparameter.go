package shared

// SigningProfileParameter
// Describes the code-signing profile.
type SigningProfileParameter struct {
	CertificateArn          *string `json:"certificateArn,omitempty"`
	CertificatePathOnDevice *string `json:"certificatePathOnDevice,omitempty"`
	Platform                *string `json:"platform,omitempty"`
}
