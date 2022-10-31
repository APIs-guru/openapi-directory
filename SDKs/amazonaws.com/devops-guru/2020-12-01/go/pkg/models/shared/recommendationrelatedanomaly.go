package shared

type RecommendationRelatedAnomaly struct {
	Resources     []RecommendationRelatedAnomalyResource     `json:"Resources,omitempty"`
	SourceDetails []RecommendationRelatedAnomalySourceDetail `json:"SourceDetails,omitempty"`
}
