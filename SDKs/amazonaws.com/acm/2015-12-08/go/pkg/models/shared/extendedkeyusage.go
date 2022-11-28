package shared

// ExtendedKeyUsage
// The Extended Key Usage X.509 v3 extension defines one or more purposes for which the public key can be used. This is in addition to or in place of the basic purposes specified by the Key Usage extension.
type ExtendedKeyUsage struct {
	Name *ExtendedKeyUsageNameEnum `json:"Name,omitempty"`
	Oid  *string                   `json:"OID,omitempty"`
}
