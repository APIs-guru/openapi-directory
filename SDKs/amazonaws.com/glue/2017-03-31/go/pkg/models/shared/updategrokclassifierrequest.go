package shared



type UpdateGrokClassifierRequest struct {
    Classification *string `json:"Classification,omitempty"`
    CustomPatterns *string `json:"CustomPatterns,omitempty"`
    GrokPattern *string `json:"GrokPattern,omitempty"`
    Name string `json:"Name"`
    
}

