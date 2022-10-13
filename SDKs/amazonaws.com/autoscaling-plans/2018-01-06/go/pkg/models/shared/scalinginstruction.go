package shared

type ScalingInstruction struct {
	CustomizedLoadMetricSpecification    *CustomizedLoadMetricSpecification        `json:"CustomizedLoadMetricSpecification"`
	DisableDynamicScaling                *bool                                     `json:"DisableDynamicScaling"`
	MaxCapacity                          int64                                     `json:"MaxCapacity"`
	MinCapacity                          int64                                     `json:"MinCapacity"`
	PredefinedLoadMetricSpecification    *PredefinedLoadMetricSpecification        `json:"PredefinedLoadMetricSpecification"`
	PredictiveScalingMaxCapacityBehavior *PredictiveScalingMaxCapacityBehaviorEnum `json:"PredictiveScalingMaxCapacityBehavior"`
	PredictiveScalingMaxCapacityBuffer   *int64                                    `json:"PredictiveScalingMaxCapacityBuffer"`
	PredictiveScalingMode                *PredictiveScalingModeEnum                `json:"PredictiveScalingMode"`
	ResourceID                           string                                    `json:"ResourceId"`
	ScalableDimension                    ScalableDimensionEnum                     `json:"ScalableDimension"`
	ScalingPolicyUpdateBehavior          *ScalingPolicyUpdateBehaviorEnum          `json:"ScalingPolicyUpdateBehavior"`
	ScheduledActionBufferTime            *int64                                    `json:"ScheduledActionBufferTime"`
	ServiceNamespace                     ServiceNamespaceEnum                      `json:"ServiceNamespace"`
	TargetTrackingConfigurations         []TargetTrackingConfiguration             `json:"TargetTrackingConfigurations"`
}
