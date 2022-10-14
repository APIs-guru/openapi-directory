package shared

type RecommendationRelatedEvent struct {
	Name      *string                              `json:"Name,omitempty"`
	Resources []RecommendationRelatedEventResource `json:"Resources,omitempty"`
}
