package shared



type ListStudiosOutput struct {
    Marker *string `json:"Marker,omitempty"`
    Studios []StudioSummary `json:"Studios,omitempty"`
    
}

