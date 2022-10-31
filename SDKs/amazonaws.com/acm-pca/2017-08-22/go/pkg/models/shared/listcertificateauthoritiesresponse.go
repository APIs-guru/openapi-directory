package shared



type ListCertificateAuthoritiesResponse struct {
    CertificateAuthorities []CertificateAuthority `json:"CertificateAuthorities,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

