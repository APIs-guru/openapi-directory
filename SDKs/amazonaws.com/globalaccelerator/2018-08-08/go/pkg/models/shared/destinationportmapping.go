package shared

type DestinationPortMapping struct {
	AcceleratorArn             *string                                   `json:"AcceleratorArn"`
	AcceleratorSocketAddresses []SocketAddress                           `json:"AcceleratorSocketAddresses"`
	DestinationSocketAddress   *SocketAddress                            `json:"DestinationSocketAddress"`
	DestinationTrafficState    *CustomRoutingDestinationTrafficStateEnum `json:"DestinationTrafficState"`
	EndpointGroupArn           *string                                   `json:"EndpointGroupArn"`
	EndpointGroupRegion        *string                                   `json:"EndpointGroupRegion"`
	EndpointID                 *string                                   `json:"EndpointId"`
	IPAddressType              *IPAddressTypeEnum                        `json:"IpAddressType"`
}
