package shared



type ExtendedKeyUsage struct {
    Name *ExtendedKeyUsageNameEnum `json:"Name,omitempty"`
    Oid *string `json:"OID,omitempty"`
    
}

