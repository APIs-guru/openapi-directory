package shared

// TransitGatewayMulticastDomainOptions
// Describes the options for a transit gateway multicast domain.
type TransitGatewayMulticastDomainOptions struct {
	AutoAcceptSharedAssociations *AutoAcceptSharedAssociationsValueEnum
	Igmpv2Support                *Igmpv2SupportValueEnum
	StaticSourcesSupport         *StaticSourcesSupportValueEnum
}
