package shared

type Filters struct {
	ExtendedKeyUsage []ExtendedKeyUsageNameEnum `json:"extendedKeyUsage"`
	KeyTypes         []KeyAlgorithmEnum         `json:"keyTypes"`
	KeyUsage         []KeyUsageNameEnum         `json:"keyUsage"`
}
