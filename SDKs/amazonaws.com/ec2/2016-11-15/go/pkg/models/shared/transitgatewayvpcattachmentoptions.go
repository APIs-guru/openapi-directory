package shared

// TransitGatewayVpcAttachmentOptions
// Describes the VPC attachment options.
type TransitGatewayVpcAttachmentOptions struct {
	ApplianceModeSupport *ApplianceModeSupportValueEnum
	DNSSupport           *DNSSupportValueEnum
	Ipv6Support          *Ipv6SupportValueEnum
}
