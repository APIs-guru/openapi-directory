package shared

// TargetTrackingConfiguration
// Represents a target tracking scaling policy configuration to use with Amazon EC2 Auto Scaling.
type TargetTrackingConfiguration struct {
	CustomizedMetricSpecification *CustomizedMetricSpecification
	DisableScaleIn                *bool
	PredefinedMetricSpecification *PredefinedMetricSpecification
	TargetValue                   float64
}
