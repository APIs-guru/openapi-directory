package shared



type TagCertificateAuthorityRequest struct {
    CertificateAuthorityArn string `json:"CertificateAuthorityArn"`
    Tags []Tag `json:"Tags"`
    
}

