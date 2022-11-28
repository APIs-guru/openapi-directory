package shared

// VolumeRecommendationOption
// Describes a recommendation option for an Amazon Elastic Block Store (Amazon EBS) instance.
type VolumeRecommendationOption struct {
	Configuration   *VolumeConfiguration `json:"configuration,omitempty"`
	PerformanceRisk *float64             `json:"performanceRisk,omitempty"`
	Rank            *int64               `json:"rank,omitempty"`
}
