package shared



type SuspendedState struct {
    DynamicScalingInSuspended *bool `json:"DynamicScalingInSuspended,omitempty"`
    DynamicScalingOutSuspended *bool `json:"DynamicScalingOutSuspended,omitempty"`
    ScheduledScalingSuspended *bool `json:"ScheduledScalingSuspended,omitempty"`
    
}

