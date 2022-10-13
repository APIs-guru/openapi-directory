package shared

type RecommendationRelatedEvent struct {
	Name      *string                              `json:"Name"`
	Resources []RecommendationRelatedEventResource `json:"Resources"`
}
