package shared

// RecommendationRelatedAnomaly
//
//	Information about an anomaly that is related to a recommendation.
type RecommendationRelatedAnomaly struct {
	Resources     []RecommendationRelatedAnomalyResource     `json:"Resources,omitempty"`
	SourceDetails []RecommendationRelatedAnomalySourceDetail `json:"SourceDetails,omitempty"`
}
