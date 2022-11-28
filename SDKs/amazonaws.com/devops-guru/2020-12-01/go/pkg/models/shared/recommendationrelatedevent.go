package shared

// RecommendationRelatedEvent
//
//	Information about an event that is related to a recommendation.
type RecommendationRelatedEvent struct {
	Name      *string                              `json:"Name,omitempty"`
	Resources []RecommendationRelatedEventResource `json:"Resources,omitempty"`
}
