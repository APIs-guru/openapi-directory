package shared



type CertificateAuthorityConfiguration struct {
    CsrExtensions *CsrExtensions `json:"CsrExtensions,omitempty"`
    KeyAlgorithm KeyAlgorithmEnum `json:"KeyAlgorithm"`
    SigningAlgorithm SigningAlgorithmEnum `json:"SigningAlgorithm"`
    Subject Asn1Subject `json:"Subject"`
    
}

