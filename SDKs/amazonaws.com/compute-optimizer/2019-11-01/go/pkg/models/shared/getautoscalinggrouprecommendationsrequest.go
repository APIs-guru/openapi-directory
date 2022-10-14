package shared

type GetAutoScalingGroupRecommendationsRequest struct {
	AccountIds                []string                   `json:"accountIds,omitempty"`
	AutoScalingGroupArns      []string                   `json:"autoScalingGroupArns,omitempty"`
	Filters                   []Filter                   `json:"filters,omitempty"`
	MaxResults                *int64                     `json:"maxResults,omitempty"`
	NextToken                 *string                    `json:"nextToken,omitempty"`
	RecommendationPreferences *RecommendationPreferences `json:"recommendationPreferences,omitempty"`
}
