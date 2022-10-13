package shared

type DescribeLunaClientResponse struct {
	Certificate            *string `json:"Certificate"`
	CertificateFingerprint *string `json:"CertificateFingerprint"`
	ClientArn              *string `json:"ClientArn"`
	Label                  *string `json:"Label"`
	LastModifiedTimestamp  *string `json:"LastModifiedTimestamp"`
}
