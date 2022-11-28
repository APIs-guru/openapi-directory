package shared

// RecommendationRelatedAnomalyResource
//
//	Information about a resource in which DevOps Guru detected anomalous behavior.
type RecommendationRelatedAnomalyResource struct {
	Name *string `json:"Name,omitempty"`
	Type *string `json:"Type,omitempty"`
}
