package shared



type UpdateBackendAuthMfaConfig struct {
    MfaMode *MfaModeEnum `json:"MFAMode,omitempty"`
    Settings *Settings `json:"Settings,omitempty"`
    
}

