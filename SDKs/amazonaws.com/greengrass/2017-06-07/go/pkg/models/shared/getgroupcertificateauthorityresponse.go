package shared



type GetGroupCertificateAuthorityResponse struct {
    GroupCertificateAuthorityArn *string `json:"GroupCertificateAuthorityArn,omitempty"`
    GroupCertificateAuthorityID *string `json:"GroupCertificateAuthorityId,omitempty"`
    PemEncodedCertificate *string `json:"PemEncodedCertificate,omitempty"`
    
}

