package shared



type ServerCertificateSummary struct {
    ServerCertificateArn *string `json:"serverCertificateArn,omitempty"`
    ServerCertificateStatus *ServerCertificateStatusEnum `json:"serverCertificateStatus,omitempty"`
    ServerCertificateStatusDetail *string `json:"serverCertificateStatusDetail,omitempty"`
    
}

