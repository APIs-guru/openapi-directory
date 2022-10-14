package shared

type GetEc2InstanceRecommendationsRequest struct {
	AccountIds                []string                   `json:"accountIds,omitempty"`
	Filters                   []Filter                   `json:"filters,omitempty"`
	InstanceArns              []string                   `json:"instanceArns,omitempty"`
	MaxResults                *int64                     `json:"maxResults,omitempty"`
	NextToken                 *string                    `json:"nextToken,omitempty"`
	RecommendationPreferences *RecommendationPreferences `json:"recommendationPreferences,omitempty"`
}
