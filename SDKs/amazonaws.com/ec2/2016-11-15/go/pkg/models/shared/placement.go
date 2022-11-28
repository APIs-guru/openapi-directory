package shared

// Placement
// Describes the placement of an instance.
type Placement struct {
	Affinity             *string
	AvailabilityZone     *string
	GroupName            *string
	HostID               *string
	HostResourceGroupArn *string
	PartitionNumber      *int64
	SpreadDomain         *string
	Tenancy              *TenancyEnum
}
