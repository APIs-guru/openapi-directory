package shared

// DesiredConfiguration
// <p>Describes the desired configuration for an instance refresh. </p> <p>If you specify a desired configuration, you must specify either a <code>LaunchTemplate</code> or a <code>MixedInstancesPolicy</code>. </p>
type DesiredConfiguration struct {
	LaunchTemplate       *LaunchTemplateSpecification
	MixedInstancesPolicy *MixedInstancesPolicy
}
