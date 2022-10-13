package shared

type GetAutoScalingGroupRecommendationsRequest struct {
	AccountIds                []string                   `json:"accountIds"`
	AutoScalingGroupArns      []string                   `json:"autoScalingGroupArns"`
	Filters                   []Filter                   `json:"filters"`
	MaxResults                *int64                     `json:"maxResults"`
	NextToken                 *string                    `json:"nextToken"`
	RecommendationPreferences *RecommendationPreferences `json:"recommendationPreferences"`
}
