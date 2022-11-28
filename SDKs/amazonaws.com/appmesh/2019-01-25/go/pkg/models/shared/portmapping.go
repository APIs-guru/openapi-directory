package shared

// PortMapping
// An object that represents a port mapping.
type PortMapping struct {
	Port     int64            `json:"port"`
	Protocol PortProtocolEnum `json:"protocol"`
}
