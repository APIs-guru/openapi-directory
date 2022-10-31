package shared



type ApplicationSettings struct {
    Enabled bool `json:"Enabled"`
    SettingsGroup *string `json:"SettingsGroup,omitempty"`
    
}

