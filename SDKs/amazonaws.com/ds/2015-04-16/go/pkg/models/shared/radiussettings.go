package shared



type RadiusSettings struct {
    AuthenticationProtocol *RadiusAuthenticationProtocolEnum `json:"AuthenticationProtocol,omitempty"`
    DisplayLabel *string `json:"DisplayLabel,omitempty"`
    RadiusPort *int64 `json:"RadiusPort,omitempty"`
    RadiusRetries *int64 `json:"RadiusRetries,omitempty"`
    RadiusServers []string `json:"RadiusServers,omitempty"`
    RadiusTimeout *int64 `json:"RadiusTimeout,omitempty"`
    SharedSecret *string `json:"SharedSecret,omitempty"`
    UseSameUsername *bool `json:"UseSameUsername,omitempty"`
    
}

