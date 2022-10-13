package shared

type VolumeRecommendationOption struct {
	Configuration   *VolumeConfiguration `json:"configuration"`
	PerformanceRisk *float64             `json:"performanceRisk"`
	Rank            *int64               `json:"rank"`
}
