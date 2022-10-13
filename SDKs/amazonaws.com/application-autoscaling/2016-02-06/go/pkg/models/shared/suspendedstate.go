package shared

type SuspendedState struct {
	DynamicScalingInSuspended  *bool `json:"DynamicScalingInSuspended"`
	DynamicScalingOutSuspended *bool `json:"DynamicScalingOutSuspended"`
	ScheduledScalingSuspended  *bool `json:"ScheduledScalingSuspended"`
}
