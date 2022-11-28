package shared

// PeeringConnectionOptions
// Describes the VPC peering connection options.
type PeeringConnectionOptions struct {
	AllowDNSResolutionFromRemoteVpc            *bool
	AllowEgressFromLocalClassicLinkToRemoteVpc *bool
	AllowEgressFromLocalVpcToRemoteClassicLink *bool
}
