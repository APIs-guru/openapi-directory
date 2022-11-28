package shared

// ScalingPolicy
// Describes a scaling policy.
type ScalingPolicy struct {
	AdjustmentType                 *string
	Alarms                         []Alarm
	AutoScalingGroupName           *string
	Cooldown                       *int64
	Enabled                        *bool
	EstimatedInstanceWarmup        *int64
	MetricAggregationType          *string
	MinAdjustmentMagnitude         *int64
	MinAdjustmentStep              *int64
	PolicyArn                      *string
	PolicyName                     *string
	PolicyType                     *string
	PredictiveScalingConfiguration *PredictiveScalingConfiguration
	ScalingAdjustment              *int64
	StepAdjustments                []StepAdjustment
	TargetTrackingConfiguration    *TargetTrackingConfiguration
}
