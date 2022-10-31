package shared

type DescribeLunaClientRequest struct {
	CertificateFingerprint *string `json:"CertificateFingerprint,omitempty"`
	ClientArn              *string `json:"ClientArn,omitempty"`
}
