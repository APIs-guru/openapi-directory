package shared

// LaunchTemplateConfig
// Describes a launch template and overrides.
type LaunchTemplateConfig struct {
	LaunchTemplateSpecification *FleetLaunchTemplateSpecification
	Overrides                   []LaunchTemplateOverrides
}
