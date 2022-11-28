package shared

// ServerCertificateSummary
// An object that contains information about a server certificate.
type ServerCertificateSummary struct {
	ServerCertificateArn          *string                      `json:"serverCertificateArn,omitempty"`
	ServerCertificateStatus       *ServerCertificateStatusEnum `json:"serverCertificateStatus,omitempty"`
	ServerCertificateStatusDetail *string                      `json:"serverCertificateStatusDetail,omitempty"`
}
