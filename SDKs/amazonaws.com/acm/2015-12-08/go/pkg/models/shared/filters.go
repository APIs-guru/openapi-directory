package shared



type Filters struct {
    ExtendedKeyUsage []ExtendedKeyUsageNameEnum `json:"extendedKeyUsage,omitempty"`
    KeyTypes []KeyAlgorithmEnum `json:"keyTypes,omitempty"`
    KeyUsage []KeyUsageNameEnum `json:"keyUsage,omitempty"`
    
}

