package shared

type ExtendedKeyUsage struct {
	ExtendedKeyUsageObjectIdentifier *string                   `json:"ExtendedKeyUsageObjectIdentifier"`
	ExtendedKeyUsageType             *ExtendedKeyUsageTypeEnum `json:"ExtendedKeyUsageType"`
}
