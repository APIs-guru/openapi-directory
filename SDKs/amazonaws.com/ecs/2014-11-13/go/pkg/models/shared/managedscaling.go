package shared

type ManagedScaling struct {
	InstanceWarmupPeriod   *int64                    `json:"instanceWarmupPeriod"`
	MaximumScalingStepSize *int64                    `json:"maximumScalingStepSize"`
	MinimumScalingStepSize *int64                    `json:"minimumScalingStepSize"`
	Status                 *ManagedScalingStatusEnum `json:"status"`
	TargetCapacity         *int64                    `json:"targetCapacity"`
}
