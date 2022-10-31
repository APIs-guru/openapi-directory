package shared



type RemoveTagsFromCertificateRequest struct {
    CertificateArn string `json:"CertificateArn"`
    Tags []Tag `json:"Tags"`
    
}

