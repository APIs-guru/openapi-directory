package shared

// SuspendedState
// Specifies whether the scaling activities for a scalable target are in a suspended state.
type SuspendedState struct {
	DynamicScalingInSuspended  *bool `json:"DynamicScalingInSuspended,omitempty"`
	DynamicScalingOutSuspended *bool `json:"DynamicScalingOutSuspended,omitempty"`
	ScheduledScalingSuspended  *bool `json:"ScheduledScalingSuspended,omitempty"`
}
