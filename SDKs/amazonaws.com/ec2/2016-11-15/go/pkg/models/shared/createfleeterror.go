package shared

// CreateFleetError
// Describes the instances that could not be launched by the fleet.
type CreateFleetError struct {
	ErrorCode                  *string
	ErrorMessage               *string
	LaunchTemplateAndOverrides *LaunchTemplateAndOverridesResponse
	Lifecycle                  *InstanceLifecycleEnum
}
