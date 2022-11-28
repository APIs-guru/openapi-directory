package shared

// CreateFleetInstance
// Describes the instances that were launched by the fleet.
type CreateFleetInstance struct {
	InstanceIds                []string
	InstanceType               *InstanceTypeEnum
	LaunchTemplateAndOverrides *LaunchTemplateAndOverridesResponse
	Lifecycle                  *InstanceLifecycleEnum
	Platform                   *PlatformValuesEnum
}
