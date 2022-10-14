package shared

type GetAutoScalingGroupRecommendationsResponse struct {
	AutoScalingGroupRecommendations []AutoScalingGroupRecommendation `json:"autoScalingGroupRecommendations,omitempty"`
	Errors                          []GetRecommendationError         `json:"errors,omitempty"`
	NextToken                       *string                          `json:"nextToken,omitempty"`
}
