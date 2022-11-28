package shared

// Subnet
// Represents the subnet associated with a DAX cluster. This parameter refers to subnets defined in Amazon Virtual Private Cloud (Amazon VPC) and used with DAX.
type Subnet struct {
	SubnetAvailabilityZone *string `json:"SubnetAvailabilityZone,omitempty"`
	SubnetIdentifier       *string `json:"SubnetIdentifier,omitempty"`
}
