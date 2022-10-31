package shared



type UpdateCertificateAuthorityRequest struct {
    CertificateAuthorityArn string `json:"CertificateAuthorityArn"`
    RevocationConfiguration *RevocationConfiguration `json:"RevocationConfiguration,omitempty"`
    Status *CertificateAuthorityStatusEnum `json:"Status,omitempty"`
    
}

