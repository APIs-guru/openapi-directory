package shared

// ServiceDetail
// Describes a VPC endpoint service.
type ServiceDetail struct {
	AcceptanceRequired              *bool
	AvailabilityZones               []string
	BaseEndpointDNSNames            []string
	ManagesVpcEndpoints             *bool
	Owner                           *string
	PrivateDNSName                  *string
	PrivateDNSNameVerificationState *DNSNameStateEnum
	PrivateDNSNames                 []PrivateDNSDetails
	ServiceID                       *string
	ServiceName                     *string
	ServiceType                     []ServiceTypeDetail
	Tags                            []Tag
	VpcEndpointPolicySupported      *bool
}
