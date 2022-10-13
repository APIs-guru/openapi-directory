package shared

type RecommendationSource struct {
	RecommendationSourceArn  *string                       `json:"recommendationSourceArn"`
	RecommendationSourceType *RecommendationSourceTypeEnum `json:"recommendationSourceType"`
}
