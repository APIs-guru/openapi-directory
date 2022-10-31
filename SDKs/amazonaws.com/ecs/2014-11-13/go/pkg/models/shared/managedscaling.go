package shared

type ManagedScaling struct {
	InstanceWarmupPeriod   *int64                    `json:"instanceWarmupPeriod,omitempty"`
	MaximumScalingStepSize *int64                    `json:"maximumScalingStepSize,omitempty"`
	MinimumScalingStepSize *int64                    `json:"minimumScalingStepSize,omitempty"`
	Status                 *ManagedScalingStatusEnum `json:"status,omitempty"`
	TargetCapacity         *int64                    `json:"targetCapacity,omitempty"`
}
