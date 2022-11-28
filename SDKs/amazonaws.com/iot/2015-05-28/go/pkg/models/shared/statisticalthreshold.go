package shared

// StatisticalThreshold
// A statistical ranking (percentile) that indicates a threshold value by which a behavior is determined to be in compliance or in violation of the behavior.
type StatisticalThreshold struct {
	Statistic *string `json:"statistic,omitempty"`
}
