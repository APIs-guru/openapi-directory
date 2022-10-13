package shared

type ExtendedKeyUsage struct {
	Name *ExtendedKeyUsageNameEnum `json:"Name"`
	Oid  *string                   `json:"OID"`
}
