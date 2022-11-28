package shared

// VirtualGatewayPortMapping
// An object that represents a port mapping.
type VirtualGatewayPortMapping struct {
	Port     int64                          `json:"port"`
	Protocol VirtualGatewayPortProtocolEnum `json:"protocol"`
}
