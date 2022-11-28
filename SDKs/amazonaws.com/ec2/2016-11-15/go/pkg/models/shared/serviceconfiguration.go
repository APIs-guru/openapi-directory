package shared

// ServiceConfiguration
// Describes a service configuration for a VPC endpoint service.
type ServiceConfiguration struct {
	AcceptanceRequired          *bool
	AvailabilityZones           []string
	BaseEndpointDNSNames        []string
	GatewayLoadBalancerArns     []string
	ManagesVpcEndpoints         *bool
	NetworkLoadBalancerArns     []string
	PrivateDNSName              *string
	PrivateDNSNameConfiguration *PrivateDNSNameConfiguration
	ServiceID                   *string
	ServiceName                 *string
	ServiceState                *ServiceStateEnum
	ServiceType                 []ServiceTypeDetail
	Tags                        []Tag
}
