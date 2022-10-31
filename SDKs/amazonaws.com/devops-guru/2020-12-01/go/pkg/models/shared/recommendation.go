package shared

type Recommendation struct {
	Description      *string                        `json:"Description,omitempty"`
	Link             *string                        `json:"Link,omitempty"`
	Name             *string                        `json:"Name,omitempty"`
	Reason           *string                        `json:"Reason,omitempty"`
	RelatedAnomalies []RecommendationRelatedAnomaly `json:"RelatedAnomalies,omitempty"`
	RelatedEvents    []RecommendationRelatedEvent   `json:"RelatedEvents,omitempty"`
}
