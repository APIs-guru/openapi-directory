package shared

// PredictiveScalingConfiguration
// Represents a predictive scaling policy configuration to use with Amazon EC2 Auto Scaling.
type PredictiveScalingConfiguration struct {
	MaxCapacityBreachBehavior *PredictiveScalingMaxCapacityBreachBehaviorEnum
	MaxCapacityBuffer         *int64
	MetricSpecifications      []PredictiveScalingMetricSpecification
	Mode                      *PredictiveScalingModeEnum
	SchedulingBufferTime      *int64
}
