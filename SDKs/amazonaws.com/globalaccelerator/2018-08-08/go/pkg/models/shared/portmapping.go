package shared

// PortMapping
// Returns the ports and associated IP addresses and ports of Amazon EC2 instances in your virtual private cloud (VPC) subnets. Custom routing is a port mapping protocol in AWS Global Accelerator that statically associates port ranges with VPC subnets, which allows Global Accelerator to route to specific instances and ports within one or more subnets.
type PortMapping struct {
	AcceleratorPort          *int64                                    `json:"AcceleratorPort,omitempty"`
	DestinationSocketAddress *SocketAddress                            `json:"DestinationSocketAddress,omitempty"`
	DestinationTrafficState  *CustomRoutingDestinationTrafficStateEnum `json:"DestinationTrafficState,omitempty"`
	EndpointGroupArn         *string                                   `json:"EndpointGroupArn,omitempty"`
	EndpointID               *string                                   `json:"EndpointId,omitempty"`
	Protocols                []CustomRoutingProtocolEnum               `json:"Protocols,omitempty"`
}
