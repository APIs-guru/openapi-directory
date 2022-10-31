package shared



type PortMapping struct {
    AcceleratorPort *int64 `json:"AcceleratorPort,omitempty"`
    DestinationSocketAddress *SocketAddress `json:"DestinationSocketAddress,omitempty"`
    DestinationTrafficState *CustomRoutingDestinationTrafficStateEnum `json:"DestinationTrafficState,omitempty"`
    EndpointGroupArn *string `json:"EndpointGroupArn,omitempty"`
    EndpointID *string `json:"EndpointId,omitempty"`
    Protocols []CustomRoutingProtocolEnum `json:"Protocols,omitempty"`
    
}

