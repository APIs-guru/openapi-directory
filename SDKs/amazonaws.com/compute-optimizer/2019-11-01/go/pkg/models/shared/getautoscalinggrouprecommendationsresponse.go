package shared

type GetAutoScalingGroupRecommendationsResponse struct {
	AutoScalingGroupRecommendations []AutoScalingGroupRecommendation `json:"autoScalingGroupRecommendations"`
	Errors                          []GetRecommendationError         `json:"errors"`
	NextToken                       *string                          `json:"nextToken"`
}
