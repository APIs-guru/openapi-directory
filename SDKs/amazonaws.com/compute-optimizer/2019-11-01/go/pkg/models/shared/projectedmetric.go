package shared

import (
	"time"
)

type ProjectedMetric struct {
	Name       *MetricNameEnum `json:"name,omitempty"`
	Timestamps []time.Time     `json:"timestamps,omitempty"`
	Values     []float64       `json:"values,omitempty"`
}
