package shared



type ListPresetsResponse struct {
    NextPageToken *string `json:"NextPageToken,omitempty"`
    Presets []Preset `json:"Presets,omitempty"`
    
}

