package shared



type CreateBackendAuthMfaConfig struct {
    MfaMode MfaModeEnum `json:"MFAMode"`
    Settings *Settings `json:"Settings,omitempty"`
    
}

