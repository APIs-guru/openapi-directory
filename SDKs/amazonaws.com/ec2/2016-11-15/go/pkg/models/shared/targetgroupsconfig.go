package shared

// TargetGroupsConfig
// Describes the target groups to attach to a Spot Fleet. Spot Fleet registers the running Spot Instances with these target groups.
type TargetGroupsConfig struct {
	TargetGroups []TargetGroup
}
