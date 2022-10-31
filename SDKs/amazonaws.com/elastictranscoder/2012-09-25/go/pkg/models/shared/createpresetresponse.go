package shared



type CreatePresetResponse struct {
    Preset *Preset `json:"Preset,omitempty"`
    Warning *string `json:"Warning,omitempty"`
    
}

