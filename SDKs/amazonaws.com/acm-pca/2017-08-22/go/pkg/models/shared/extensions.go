package shared



type Extensions struct {
    CertificatePolicies []PolicyInformation `json:"CertificatePolicies,omitempty"`
    ExtendedKeyUsage []ExtendedKeyUsage `json:"ExtendedKeyUsage,omitempty"`
    KeyUsage *KeyUsage `json:"KeyUsage,omitempty"`
    SubjectAlternativeNames []GeneralName `json:"SubjectAlternativeNames,omitempty"`
    
}

