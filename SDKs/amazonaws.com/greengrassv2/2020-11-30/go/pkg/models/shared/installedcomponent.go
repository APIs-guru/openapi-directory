package shared

type InstalledComponent struct {
	ComponentName         *string                               `json:"componentName"`
	ComponentVersion      *string                               `json:"componentVersion"`
	IsRoot                *bool                                 `json:"isRoot"`
	LifecycleState        *InstalledComponentLifecycleStateEnum `json:"lifecycleState"`
	LifecycleStateDetails *string                               `json:"lifecycleStateDetails"`
}
