package shared

// AssociatedTargetNetwork
// Describes a target network that is associated with a Client VPN endpoint. A target network is a subnet in a VPC.
type AssociatedTargetNetwork struct {
	NetworkID   *string
	NetworkType *AssociatedNetworkTypeEnum
}
