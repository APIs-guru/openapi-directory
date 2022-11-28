package shared

// PredictiveScalingPredefinedLoadMetric
// <p>Describes a load metric for a predictive scaling policy.</p> <p>When returned in the output of <code>DescribePolicies</code>, it indicates that a predictive scaling policy uses individually specified load and scaling metrics instead of a metric pair.</p>
type PredictiveScalingPredefinedLoadMetric struct {
	PredefinedMetricType PredefinedLoadMetricTypeEnum
	ResourceLabel        *string
}
