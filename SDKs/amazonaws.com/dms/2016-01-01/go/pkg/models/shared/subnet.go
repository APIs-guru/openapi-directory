package shared

type Subnet struct {
	SubnetAvailabilityZone *AvailabilityZone `json:"SubnetAvailabilityZone"`
	SubnetIdentifier       *string           `json:"SubnetIdentifier"`
	SubnetStatus           *string           `json:"SubnetStatus"`
}
