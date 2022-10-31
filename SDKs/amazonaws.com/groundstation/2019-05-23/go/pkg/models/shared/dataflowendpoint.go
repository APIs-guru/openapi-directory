package shared



type DataflowEndpoint struct {
    Address *SocketAddress `json:"address,omitempty"`
    Mtu *int64 `json:"mtu,omitempty"`
    Name *string `json:"name,omitempty"`
    Status *EndpointStatusEnum `json:"status,omitempty"`
    
}

