package shared

type ScalingInstruction struct {
	CustomizedLoadMetricSpecification    *CustomizedLoadMetricSpecification        `json:"CustomizedLoadMetricSpecification,omitempty"`
	DisableDynamicScaling                *bool                                     `json:"DisableDynamicScaling,omitempty"`
	MaxCapacity                          int64                                     `json:"MaxCapacity"`
	MinCapacity                          int64                                     `json:"MinCapacity"`
	PredefinedLoadMetricSpecification    *PredefinedLoadMetricSpecification        `json:"PredefinedLoadMetricSpecification,omitempty"`
	PredictiveScalingMaxCapacityBehavior *PredictiveScalingMaxCapacityBehaviorEnum `json:"PredictiveScalingMaxCapacityBehavior,omitempty"`
	PredictiveScalingMaxCapacityBuffer   *int64                                    `json:"PredictiveScalingMaxCapacityBuffer,omitempty"`
	PredictiveScalingMode                *PredictiveScalingModeEnum                `json:"PredictiveScalingMode,omitempty"`
	ResourceID                           string                                    `json:"ResourceId"`
	ScalableDimension                    ScalableDimensionEnum                     `json:"ScalableDimension"`
	ScalingPolicyUpdateBehavior          *ScalingPolicyUpdateBehaviorEnum          `json:"ScalingPolicyUpdateBehavior,omitempty"`
	ScheduledActionBufferTime            *int64                                    `json:"ScheduledActionBufferTime,omitempty"`
	ServiceNamespace                     ServiceNamespaceEnum                      `json:"ServiceNamespace"`
	TargetTrackingConfigurations         []TargetTrackingConfiguration             `json:"TargetTrackingConfigurations"`
}
