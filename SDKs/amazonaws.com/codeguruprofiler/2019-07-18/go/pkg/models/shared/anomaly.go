package shared

type Anomaly struct {
	Instances []AnomalyInstance `json:"instances"`
	Metric    Metric            `json:"metric"`
	Reason    string            `json:"reason"`
}
