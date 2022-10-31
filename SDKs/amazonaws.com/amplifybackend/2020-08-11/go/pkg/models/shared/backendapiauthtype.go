package shared



type BackendAPIAuthType struct {
    Mode *ModeEnum `json:"Mode,omitempty"`
    Settings *BackendAPIAppSyncAuthSettings `json:"Settings,omitempty"`
    
}

