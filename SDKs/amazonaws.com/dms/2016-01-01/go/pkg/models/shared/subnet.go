package shared

// Subnet
// In response to a request by the <code>DescribeReplicationSubnetGroups</code> operation, this object identifies a subnet by its given Availability Zone, subnet identifier, and status.
type Subnet struct {
	SubnetAvailabilityZone *AvailabilityZone `json:"SubnetAvailabilityZone,omitempty"`
	SubnetIdentifier       *string           `json:"SubnetIdentifier,omitempty"`
	SubnetStatus           *string           `json:"SubnetStatus,omitempty"`
}
