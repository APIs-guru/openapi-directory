package shared

type VolumeRecommendationOption struct {
	Configuration   *VolumeConfiguration `json:"configuration,omitempty"`
	PerformanceRisk *float64             `json:"performanceRisk,omitempty"`
	Rank            *int64               `json:"rank,omitempty"`
}
