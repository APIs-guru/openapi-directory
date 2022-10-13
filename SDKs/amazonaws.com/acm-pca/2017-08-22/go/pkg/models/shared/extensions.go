package shared

type Extensions struct {
	CertificatePolicies     []PolicyInformation `json:"CertificatePolicies"`
	ExtendedKeyUsage        []ExtendedKeyUsage  `json:"ExtendedKeyUsage"`
	KeyUsage                *KeyUsage           `json:"KeyUsage"`
	SubjectAlternativeNames []GeneralName       `json:"SubjectAlternativeNames"`
}
