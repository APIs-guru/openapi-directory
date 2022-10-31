package shared



type ListSecurityConfigurationsOutput struct {
    Marker *string `json:"Marker,omitempty"`
    SecurityConfigurations []SecurityConfigurationSummary `json:"SecurityConfigurations,omitempty"`
    
}

