package shared



type PortMapping struct {
    Port int64 `json:"port"`
    Protocol PortProtocolEnum `json:"protocol"`
    
}

