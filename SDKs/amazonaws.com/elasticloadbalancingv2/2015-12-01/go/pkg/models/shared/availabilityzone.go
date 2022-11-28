package shared

// AvailabilityZone
// Information about an Availability Zone.
type AvailabilityZone struct {
	LoadBalancerAddresses []LoadBalancerAddress
	OutpostID             *string
	SubnetID              *string
	ZoneName              *string
}
