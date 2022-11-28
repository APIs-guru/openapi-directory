package shared

import (
	"time"
)

// LoadForecast
// A <code>GetPredictiveScalingForecast</code> call returns the load forecast for a predictive scaling policy. This structure includes the data points for that load forecast, along with the timestamps of those data points and the metric specification.
type LoadForecast struct {
	MetricSpecification PredictiveScalingMetricSpecification
	Timestamps          []time.Time
	Values              []float64
}
