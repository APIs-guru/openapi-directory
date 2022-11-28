package shared

// DestinationPortMapping
// The port mappings for a specified endpoint IP address (destination).
type DestinationPortMapping struct {
	AcceleratorArn             *string                                   `json:"AcceleratorArn,omitempty"`
	AcceleratorSocketAddresses []SocketAddress                           `json:"AcceleratorSocketAddresses,omitempty"`
	DestinationSocketAddress   *SocketAddress                            `json:"DestinationSocketAddress,omitempty"`
	DestinationTrafficState    *CustomRoutingDestinationTrafficStateEnum `json:"DestinationTrafficState,omitempty"`
	EndpointGroupArn           *string                                   `json:"EndpointGroupArn,omitempty"`
	EndpointGroupRegion        *string                                   `json:"EndpointGroupRegion,omitempty"`
	EndpointID                 *string                                   `json:"EndpointId,omitempty"`
	IPAddressType              *IPAddressTypeEnum                        `json:"IpAddressType,omitempty"`
}
