package shared

// FleetLaunchTemplateConfig
// Describes a launch template and overrides.
type FleetLaunchTemplateConfig struct {
	LaunchTemplateSpecification *FleetLaunchTemplateSpecification
	Overrides                   []FleetLaunchTemplateOverrides
}
