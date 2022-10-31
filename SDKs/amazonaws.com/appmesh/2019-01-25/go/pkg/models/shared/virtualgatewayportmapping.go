package shared



type VirtualGatewayPortMapping struct {
    Port int64 `json:"port"`
    Protocol VirtualGatewayPortProtocolEnum `json:"protocol"`
    
}

