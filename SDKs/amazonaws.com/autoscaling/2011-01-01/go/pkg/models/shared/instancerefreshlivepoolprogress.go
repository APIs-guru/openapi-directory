package shared

// InstanceRefreshLivePoolProgress
// Reports the progress of an instance refresh on instances that are in the Auto Scaling group.
type InstanceRefreshLivePoolProgress struct {
	InstancesToUpdate  *int64
	PercentageComplete *int64
}
