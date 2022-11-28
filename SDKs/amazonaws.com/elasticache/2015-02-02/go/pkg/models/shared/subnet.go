package shared

// Subnet
// Represents the subnet associated with a cluster. This parameter refers to subnets defined in Amazon Virtual Private Cloud (Amazon VPC) and used with ElastiCache.
type Subnet struct {
	SubnetAvailabilityZone *AvailabilityZone
	SubnetIdentifier       *string
	SubnetOutpost          *SubnetOutpost
}
