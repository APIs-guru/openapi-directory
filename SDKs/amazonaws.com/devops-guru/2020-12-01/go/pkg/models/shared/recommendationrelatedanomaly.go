package shared

type RecommendationRelatedAnomaly struct {
	Resources     []RecommendationRelatedAnomalyResource     `json:"Resources"`
	SourceDetails []RecommendationRelatedAnomalySourceDetail `json:"SourceDetails"`
}
