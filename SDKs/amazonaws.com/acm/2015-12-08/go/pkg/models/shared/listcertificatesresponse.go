package shared



type ListCertificatesResponse struct {
    CertificateSummaryList []CertificateSummary `json:"CertificateSummaryList,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

