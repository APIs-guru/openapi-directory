package shared

// LaunchTemplatePlacement
// Describes the placement of an instance.
type LaunchTemplatePlacement struct {
	Affinity             *string
	AvailabilityZone     *string
	GroupName            *string
	HostID               *string
	HostResourceGroupArn *string
	PartitionNumber      *int64
	SpreadDomain         *string
	Tenancy              *TenancyEnum
}
