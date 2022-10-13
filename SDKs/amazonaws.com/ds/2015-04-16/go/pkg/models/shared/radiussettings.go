package shared

type RadiusSettings struct {
	AuthenticationProtocol *RadiusAuthenticationProtocolEnum `json:"AuthenticationProtocol"`
	DisplayLabel           *string                           `json:"DisplayLabel"`
	RadiusPort             *int64                            `json:"RadiusPort"`
	RadiusRetries          *int64                            `json:"RadiusRetries"`
	RadiusServers          []string                          `json:"RadiusServers"`
	RadiusTimeout          *int64                            `json:"RadiusTimeout"`
	SharedSecret           *string                           `json:"SharedSecret"`
	UseSameUsername        *bool                             `json:"UseSameUsername"`
}
