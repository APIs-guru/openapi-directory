package shared

// RecommendationRelatedEventResource
//
//	Information about an AWS resource that emitted and event that is related to a recommendation in an insight.
type RecommendationRelatedEventResource struct {
	Name *string `json:"Name,omitempty"`
	Type *string `json:"Type,omitempty"`
}
