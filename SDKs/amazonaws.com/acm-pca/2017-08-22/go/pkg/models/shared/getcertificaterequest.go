package shared



type GetCertificateRequest struct {
    CertificateArn string `json:"CertificateArn"`
    CertificateAuthorityArn string `json:"CertificateAuthorityArn"`
    
}

