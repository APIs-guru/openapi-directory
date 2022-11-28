package shared

// ReservedInstancesConfiguration
// Describes the configuration settings for the modified Reserved Instances.
type ReservedInstancesConfiguration struct {
	AvailabilityZone *string
	InstanceCount    *int64
	InstanceType     *InstanceTypeEnum
	Platform         *string
	Scope            *ScopeEnum
}
