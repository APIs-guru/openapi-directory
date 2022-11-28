package shared

// TransitGatewayMulticastRegisteredGroupMembers
// Describes the registered transit gateway multicast group members.
type TransitGatewayMulticastRegisteredGroupMembers struct {
	GroupIPAddress                  *string
	RegisteredNetworkInterfaceIds   []string
	TransitGatewayMulticastDomainID *string
}
