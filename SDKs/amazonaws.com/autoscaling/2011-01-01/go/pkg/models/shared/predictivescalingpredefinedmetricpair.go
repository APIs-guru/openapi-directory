package shared

// PredictiveScalingPredefinedMetricPair
// Represents a metric pair for a predictive scaling policy.
type PredictiveScalingPredefinedMetricPair struct {
	PredefinedMetricType PredefinedMetricPairTypeEnum
	ResourceLabel        *string
}
