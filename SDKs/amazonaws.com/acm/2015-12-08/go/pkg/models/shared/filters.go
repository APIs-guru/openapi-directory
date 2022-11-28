package shared

// Filters
// This structure can be used in the <a>ListCertificates</a> action to filter the output of the certificate list.
type Filters struct {
	ExtendedKeyUsage []ExtendedKeyUsageNameEnum `json:"extendedKeyUsage,omitempty"`
	KeyTypes         []KeyAlgorithmEnum         `json:"keyTypes,omitempty"`
	KeyUsage         []KeyUsageNameEnum         `json:"keyUsage,omitempty"`
}
