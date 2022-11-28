package shared

// DescribeFleetError
// Describes the instances that could not be launched by the fleet.
type DescribeFleetError struct {
	ErrorCode                  *string
	ErrorMessage               *string
	LaunchTemplateAndOverrides *LaunchTemplateAndOverridesResponse
	Lifecycle                  *InstanceLifecycleEnum
}
