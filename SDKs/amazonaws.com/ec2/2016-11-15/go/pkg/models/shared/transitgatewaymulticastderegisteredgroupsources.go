package shared

// TransitGatewayMulticastDeregisteredGroupSources
// Describes the deregistered transit gateway multicast group sources.
type TransitGatewayMulticastDeregisteredGroupSources struct {
	DeregisteredNetworkInterfaceIds []string
	GroupIPAddress                  *string
	TransitGatewayMulticastDomainID *string
}
