package shared



type RevocationConfiguration struct {
    CrlConfiguration *CrlConfiguration `json:"CrlConfiguration,omitempty"`
    OcspConfiguration *OcspConfiguration `json:"OcspConfiguration,omitempty"`
    
}

