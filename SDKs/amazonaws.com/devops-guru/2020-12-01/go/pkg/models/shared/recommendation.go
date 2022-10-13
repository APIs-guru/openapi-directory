package shared

type Recommendation struct {
	Description      *string                        `json:"Description"`
	Link             *string                        `json:"Link"`
	Name             *string                        `json:"Name"`
	Reason           *string                        `json:"Reason"`
	RelatedAnomalies []RecommendationRelatedAnomaly `json:"RelatedAnomalies"`
	RelatedEvents    []RecommendationRelatedEvent   `json:"RelatedEvents"`
}
