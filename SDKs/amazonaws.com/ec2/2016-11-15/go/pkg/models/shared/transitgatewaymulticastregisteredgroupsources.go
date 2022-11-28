package shared

// TransitGatewayMulticastRegisteredGroupSources
// Describes the members registered with the transit gateway multicast group.
type TransitGatewayMulticastRegisteredGroupSources struct {
	GroupIPAddress                  *string
	RegisteredNetworkInterfaceIds   []string
	TransitGatewayMulticastDomainID *string
}
