package shared



type DevicePoolCompatibilityResult struct {
    Compatible *bool `json:"compatible,omitempty"`
    Device *Device `json:"device,omitempty"`
    IncompatibilityMessages []IncompatibilityMessage `json:"incompatibilityMessages,omitempty"`
    
}

