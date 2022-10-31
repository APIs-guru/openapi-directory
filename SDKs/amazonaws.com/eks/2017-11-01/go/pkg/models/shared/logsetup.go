package shared



type LogSetup struct {
    Enabled *bool `json:"enabled,omitempty"`
    Types []LogTypeEnum `json:"types,omitempty"`
    
}

