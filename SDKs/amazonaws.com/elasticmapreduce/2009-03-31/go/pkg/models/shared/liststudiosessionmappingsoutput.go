package shared



type ListStudioSessionMappingsOutput struct {
    Marker *string `json:"Marker,omitempty"`
    SessionMappings []SessionMappingSummary `json:"SessionMappings,omitempty"`
    
}

