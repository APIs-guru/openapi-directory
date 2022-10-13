package shared

type RecommendationSummary struct {
	AccountID                  *string                       `json:"accountId"`
	RecommendationResourceType *RecommendationSourceTypeEnum `json:"recommendationResourceType"`
	Summaries                  []Summary                     `json:"summaries"`
}
