package shared

import (
	"time"
)

type ProjectedMetric struct {
	Name       *MetricNameEnum `json:"name"`
	Timestamps []time.Time     `json:"timestamps"`
	Values     []float64       `json:"values"`
}
