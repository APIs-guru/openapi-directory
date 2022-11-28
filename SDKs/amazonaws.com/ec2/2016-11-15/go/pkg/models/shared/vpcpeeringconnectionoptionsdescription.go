package shared

// VpcPeeringConnectionOptionsDescription
// Describes the VPC peering connection options.
type VpcPeeringConnectionOptionsDescription struct {
	AllowDNSResolutionFromRemoteVpc            *bool
	AllowEgressFromLocalClassicLinkToRemoteVpc *bool
	AllowEgressFromLocalVpcToRemoteClassicLink *bool
}
