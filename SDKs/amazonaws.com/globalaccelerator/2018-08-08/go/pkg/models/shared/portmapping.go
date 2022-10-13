package shared

type PortMapping struct {
	AcceleratorPort          *int64                                    `json:"AcceleratorPort"`
	DestinationSocketAddress *SocketAddress                            `json:"DestinationSocketAddress"`
	DestinationTrafficState  *CustomRoutingDestinationTrafficStateEnum `json:"DestinationTrafficState"`
	EndpointGroupArn         *string                                   `json:"EndpointGroupArn"`
	EndpointID               *string                                   `json:"EndpointId"`
	Protocols                []CustomRoutingProtocolEnum               `json:"Protocols"`
}
