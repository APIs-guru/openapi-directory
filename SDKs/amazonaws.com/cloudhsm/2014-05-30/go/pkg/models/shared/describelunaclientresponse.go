package shared

type DescribeLunaClientResponse struct {
	Certificate            *string `json:"Certificate,omitempty"`
	CertificateFingerprint *string `json:"CertificateFingerprint,omitempty"`
	ClientArn              *string `json:"ClientArn,omitempty"`
	Label                  *string `json:"Label,omitempty"`
	LastModifiedTimestamp  *string `json:"LastModifiedTimestamp,omitempty"`
}
