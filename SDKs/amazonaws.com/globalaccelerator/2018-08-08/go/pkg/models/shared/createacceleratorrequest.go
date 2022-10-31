package shared



type CreateAcceleratorRequest struct {
    Enabled *bool `json:"Enabled,omitempty"`
    IdempotencyToken string `json:"IdempotencyToken"`
    IPAddressType *IPAddressTypeEnum `json:"IpAddressType,omitempty"`
    IPAddresses []string `json:"IpAddresses,omitempty"`
    Name string `json:"Name"`
    Tags []Tag `json:"Tags,omitempty"`
    
}

