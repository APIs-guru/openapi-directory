package shared

// ExtendedKeyUsage
// Specifies additional purposes for which the certified public key may be used other than basic purposes indicated in the <code>KeyUsage</code> extension.
type ExtendedKeyUsage struct {
	ExtendedKeyUsageObjectIdentifier *string                   `json:"ExtendedKeyUsageObjectIdentifier,omitempty"`
	ExtendedKeyUsageType             *ExtendedKeyUsageTypeEnum `json:"ExtendedKeyUsageType,omitempty"`
}
