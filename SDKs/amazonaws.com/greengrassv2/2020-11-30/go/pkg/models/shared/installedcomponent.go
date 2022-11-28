package shared

// InstalledComponent
// Contains information about a component on a Greengrass core device.
type InstalledComponent struct {
	ComponentName         *string                               `json:"componentName,omitempty"`
	ComponentVersion      *string                               `json:"componentVersion,omitempty"`
	IsRoot                *bool                                 `json:"isRoot,omitempty"`
	LifecycleState        *InstalledComponentLifecycleStateEnum `json:"lifecycleState,omitempty"`
	LifecycleStateDetails *string                               `json:"lifecycleStateDetails,omitempty"`
}
