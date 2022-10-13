package shared

type GetEc2InstanceRecommendationsResponse struct {
	Errors                  []GetRecommendationError `json:"errors"`
	InstanceRecommendations []InstanceRecommendation `json:"instanceRecommendations"`
	NextToken               *string                  `json:"nextToken"`
}
