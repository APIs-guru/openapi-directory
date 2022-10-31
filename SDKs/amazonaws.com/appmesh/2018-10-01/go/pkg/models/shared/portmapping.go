package shared



type PortMapping struct {
    Port *int64 `json:"port,omitempty"`
    Protocol *PortProtocolEnum `json:"protocol,omitempty"`
    
}

