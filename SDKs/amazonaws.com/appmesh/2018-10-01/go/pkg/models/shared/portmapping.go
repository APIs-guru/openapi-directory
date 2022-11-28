package shared

// PortMapping
// An object representing a virtual node listener port mapping.
type PortMapping struct {
	Port     *int64            `json:"port,omitempty"`
	Protocol *PortProtocolEnum `json:"protocol,omitempty"`
}
