package shared

// VirtualGatewayAccessLog
// The access log configuration for a virtual gateway.
type VirtualGatewayAccessLog struct {
	File *VirtualGatewayFileAccessLog `json:"file,omitempty"`
}
