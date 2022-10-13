package shared

type ServerCertificateSummary struct {
	ServerCertificateArn          *string                      `json:"serverCertificateArn"`
	ServerCertificateStatus       *ServerCertificateStatusEnum `json:"serverCertificateStatus"`
	ServerCertificateStatusDetail *string                      `json:"serverCertificateStatusDetail"`
}
