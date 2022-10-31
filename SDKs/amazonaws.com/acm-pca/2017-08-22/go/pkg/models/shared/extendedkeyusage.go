package shared

type ExtendedKeyUsage struct {
	ExtendedKeyUsageObjectIdentifier *string                   `json:"ExtendedKeyUsageObjectIdentifier,omitempty"`
	ExtendedKeyUsageType             *ExtendedKeyUsageTypeEnum `json:"ExtendedKeyUsageType,omitempty"`
}
