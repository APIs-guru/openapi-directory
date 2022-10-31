package shared



type GetCertificateResponse struct {
    Certificate *string `json:"Certificate,omitempty"`
    CertificateChain *string `json:"CertificateChain,omitempty"`
    
}

