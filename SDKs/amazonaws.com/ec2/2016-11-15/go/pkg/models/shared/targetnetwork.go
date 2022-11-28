package shared

// TargetNetwork
// Describes a target network associated with a Client VPN endpoint.
type TargetNetwork struct {
	AssociationID       *string
	ClientVpnEndpointID *string
	SecurityGroups      []string
	Status              *AssociationStatus
	TargetNetworkID     *string
	VpcID               *string
}
