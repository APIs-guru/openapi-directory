package shared

type DescribeLunaClientRequest struct {
	CertificateFingerprint *string `json:"CertificateFingerprint"`
	ClientArn              *string `json:"ClientArn"`
}
