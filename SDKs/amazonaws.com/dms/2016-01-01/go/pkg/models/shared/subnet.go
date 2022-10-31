package shared

type Subnet struct {
	SubnetAvailabilityZone *AvailabilityZone `json:"SubnetAvailabilityZone,omitempty"`
	SubnetIdentifier       *string           `json:"SubnetIdentifier,omitempty"`
	SubnetStatus           *string           `json:"SubnetStatus,omitempty"`
}
