package shared

type InstalledComponent struct {
	ComponentName         *string                               `json:"componentName,omitempty"`
	ComponentVersion      *string                               `json:"componentVersion,omitempty"`
	IsRoot                *bool                                 `json:"isRoot,omitempty"`
	LifecycleState        *InstalledComponentLifecycleStateEnum `json:"lifecycleState,omitempty"`
	LifecycleStateDetails *string                               `json:"lifecycleStateDetails,omitempty"`
}
