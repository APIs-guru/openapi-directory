package shared

// InstanceRefreshWarmPoolProgress
// Reports the progress of an instance refresh on instances that are in the warm pool.
type InstanceRefreshWarmPoolProgress struct {
	InstancesToUpdate  *int64
	PercentageComplete *int64
}
