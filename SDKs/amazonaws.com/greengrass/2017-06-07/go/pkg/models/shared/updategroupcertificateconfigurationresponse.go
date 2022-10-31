package shared



type UpdateGroupCertificateConfigurationResponse struct {
    CertificateAuthorityExpiryInMilliseconds *string `json:"CertificateAuthorityExpiryInMilliseconds,omitempty"`
    CertificateExpiryInMilliseconds *string `json:"CertificateExpiryInMilliseconds,omitempty"`
    GroupID *string `json:"GroupId,omitempty"`
    
}

