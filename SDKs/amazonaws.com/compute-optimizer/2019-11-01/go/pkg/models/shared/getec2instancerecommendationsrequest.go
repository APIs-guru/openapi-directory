package shared

type GetEc2InstanceRecommendationsRequest struct {
	AccountIds                []string                   `json:"accountIds"`
	Filters                   []Filter                   `json:"filters"`
	InstanceArns              []string                   `json:"instanceArns"`
	MaxResults                *int64                     `json:"maxResults"`
	NextToken                 *string                    `json:"nextToken"`
	RecommendationPreferences *RecommendationPreferences `json:"recommendationPreferences"`
}
