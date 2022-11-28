package shared

// Anomaly
//
//	Details about an anomaly in a specific metric of application profile. The anomaly is detected using analysis of the metric data over a period of time.
type Anomaly struct {
	Instances []AnomalyInstance `json:"instances"`
	Metric    Metric            `json:"metric"`
	Reason    string            `json:"reason"`
}
