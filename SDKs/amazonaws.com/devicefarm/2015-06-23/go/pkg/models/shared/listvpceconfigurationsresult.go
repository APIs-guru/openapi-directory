package shared



type ListVpceConfigurationsResult struct {
    NextToken *string `json:"nextToken,omitempty"`
    VpceConfigurations []VpceConfiguration `json:"vpceConfigurations,omitempty"`
    
}

