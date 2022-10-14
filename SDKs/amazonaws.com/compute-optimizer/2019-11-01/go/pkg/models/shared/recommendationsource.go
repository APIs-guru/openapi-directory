package shared

type RecommendationSource struct {
	RecommendationSourceArn  *string                       `json:"recommendationSourceArn,omitempty"`
	RecommendationSourceType *RecommendationSourceTypeEnum `json:"recommendationSourceType,omitempty"`
}
