package shared

// DescribeFleetsInstances
// Describes the instances that were launched by the fleet.
type DescribeFleetsInstances struct {
	InstanceIds                []string
	InstanceType               *InstanceTypeEnum
	LaunchTemplateAndOverrides *LaunchTemplateAndOverridesResponse
	Lifecycle                  *InstanceLifecycleEnum
	Platform                   *PlatformValuesEnum
}
