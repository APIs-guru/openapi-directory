package shared



type StartImageBuilderRequest struct {
    AppstreamAgentVersion *string `json:"AppstreamAgentVersion,omitempty"`
    Name string `json:"Name"`
    
}

