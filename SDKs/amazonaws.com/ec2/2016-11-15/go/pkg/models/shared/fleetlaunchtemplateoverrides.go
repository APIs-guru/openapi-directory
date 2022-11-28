package shared

// FleetLaunchTemplateOverrides
// Describes overrides for a launch template.
type FleetLaunchTemplateOverrides struct {
	AvailabilityZone *string
	InstanceType     *InstanceTypeEnum
	MaxPrice         *string
	Placement        *PlacementResponse
	Priority         *float64
	SubnetID         *string
	WeightedCapacity *float64
}
