package shared



type KeyUsage struct {
    CrlSign *bool `json:"CRLSign,omitempty"`
    DataEncipherment *bool `json:"DataEncipherment,omitempty"`
    DecipherOnly *bool `json:"DecipherOnly,omitempty"`
    DigitalSignature *bool `json:"DigitalSignature,omitempty"`
    EncipherOnly *bool `json:"EncipherOnly,omitempty"`
    KeyAgreement *bool `json:"KeyAgreement,omitempty"`
    KeyCertSign *bool `json:"KeyCertSign,omitempty"`
    KeyEncipherment *bool `json:"KeyEncipherment,omitempty"`
    NonRepudiation *bool `json:"NonRepudiation,omitempty"`
    
}

