package shared

// VirtualGatewayLogging
// An object that represents logging information.
type VirtualGatewayLogging struct {
	AccessLog *VirtualGatewayAccessLog `json:"accessLog,omitempty"`
}
