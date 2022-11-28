package shared

// InstanceRefreshProgressDetails
// Reports the progress of an instance refresh on an Auto Scaling group that has a warm pool. This includes separate details for instances in the warm pool and instances in the Auto Scaling group (the live pool).
type InstanceRefreshProgressDetails struct {
	LivePoolProgress *InstanceRefreshLivePoolProgress
	WarmPoolProgress *InstanceRefreshWarmPoolProgress
}
