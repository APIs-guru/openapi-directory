package shared

// Subnet
//
//	Detailed information about a subnet.
type Subnet struct {
	SubnetAvailabilityZone *AvailabilityZone
	SubnetIdentifier       *string
	SubnetStatus           *string
}
