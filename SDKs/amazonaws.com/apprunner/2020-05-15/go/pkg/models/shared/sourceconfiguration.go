package shared



type SourceConfiguration struct {
    AuthenticationConfiguration *AuthenticationConfiguration `json:"AuthenticationConfiguration,omitempty"`
    AutoDeploymentsEnabled *bool `json:"AutoDeploymentsEnabled,omitempty"`
    CodeRepository *CodeRepository `json:"CodeRepository,omitempty"`
    ImageRepository *ImageRepository `json:"ImageRepository,omitempty"`
    
}

