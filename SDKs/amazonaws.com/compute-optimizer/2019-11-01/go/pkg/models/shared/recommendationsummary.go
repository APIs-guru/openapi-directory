package shared

type RecommendationSummary struct {
	AccountID                  *string                       `json:"accountId,omitempty"`
	RecommendationResourceType *RecommendationSourceTypeEnum `json:"recommendationResourceType,omitempty"`
	Summaries                  []Summary                     `json:"summaries,omitempty"`
}
