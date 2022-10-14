package shared

type GetEc2InstanceRecommendationsResponse struct {
	Errors                  []GetRecommendationError `json:"errors,omitempty"`
	InstanceRecommendations []InstanceRecommendation `json:"instanceRecommendations,omitempty"`
	NextToken               *string                  `json:"nextToken,omitempty"`
}
