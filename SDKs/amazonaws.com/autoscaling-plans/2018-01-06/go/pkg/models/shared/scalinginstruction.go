package shared

// ScalingInstruction
// <p>Describes a scaling instruction for a scalable resource in a scaling plan. Each scaling instruction applies to one resource.</p> <p>AWS Auto Scaling creates target tracking scaling policies based on the scaling instructions. Target tracking scaling policies adjust the capacity of your scalable resource as required to maintain resource utilization at the target value that you specified. </p> <p>AWS Auto Scaling also configures predictive scaling for your Amazon EC2 Auto Scaling groups using a subset of parameters, including the load metric, the scaling metric, the target value for the scaling metric, the predictive scaling mode (forecast and scale or forecast only), and the desired behavior when the forecast capacity exceeds the maximum capacity of the resource. With predictive scaling, AWS Auto Scaling generates forecasts with traffic predictions for the two days ahead and schedules scaling actions that proactively add and remove resource capacity to match the forecast. </p> <important> <p>We recommend waiting a minimum of 24 hours after creating an Auto Scaling group to configure predictive scaling. At minimum, there must be 24 hours of historical data to generate a forecast. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/plans/userguide/gs-best-practices.html">Best Practices for AWS Auto Scaling</a> in the <i>AWS Auto Scaling User Guide</i>.</p> </important>
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
