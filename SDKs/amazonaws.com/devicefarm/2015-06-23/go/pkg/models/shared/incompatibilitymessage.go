package shared



type IncompatibilityMessage struct {
    Message *string `json:"message,omitempty"`
    Type *DeviceAttributeEnum `json:"type,omitempty"`
    
}

