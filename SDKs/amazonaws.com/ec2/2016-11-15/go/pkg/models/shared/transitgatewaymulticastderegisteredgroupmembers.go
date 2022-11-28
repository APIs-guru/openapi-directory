package shared

// TransitGatewayMulticastDeregisteredGroupMembers
// Describes the deregistered transit gateway multicast group members.
type TransitGatewayMulticastDeregisteredGroupMembers struct {
	DeregisteredNetworkInterfaceIds []string
	GroupIPAddress                  *string
	TransitGatewayMulticastDomainID *string
}
