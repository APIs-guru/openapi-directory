package shared

// MetricWindow
// Contains a time interval window used for data aggregate computations (for example, average, sum, count, and so on).
type MetricWindow struct {
	Tumbling *TumblingWindow `json:"tumbling,omitempty"`
}
