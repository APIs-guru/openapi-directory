package shared

// PredefinedMetricSpecification
// Represents a predefined metric for a target tracking scaling policy to use with Amazon EC2 Auto Scaling.
type PredefinedMetricSpecification struct {
	PredefinedMetricType MetricTypeEnum
	ResourceLabel        *string
}
