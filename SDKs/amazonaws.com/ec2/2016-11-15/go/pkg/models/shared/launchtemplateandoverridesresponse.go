package shared

// LaunchTemplateAndOverridesResponse
// Describes a launch template and overrides.
type LaunchTemplateAndOverridesResponse struct {
	LaunchTemplateSpecification *FleetLaunchTemplateSpecification
	Overrides                   *FleetLaunchTemplateOverrides
}
