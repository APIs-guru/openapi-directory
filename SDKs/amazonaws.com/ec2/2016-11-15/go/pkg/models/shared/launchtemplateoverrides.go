package shared

// LaunchTemplateOverrides
// Describes overrides for a launch template.
type LaunchTemplateOverrides struct {
	AvailabilityZone *string
	InstanceType     *InstanceTypeEnum
	Priority         *float64
	SpotPrice        *string
	SubnetID         *string
	WeightedCapacity *float64
}
