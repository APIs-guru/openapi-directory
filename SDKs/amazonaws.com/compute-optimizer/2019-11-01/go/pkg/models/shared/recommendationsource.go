package shared

// RecommendationSource
// Describes the source of a recommendation, such as an Amazon EC2 instance or Auto Scaling group.
type RecommendationSource struct {
	RecommendationSourceArn  *string                       `json:"recommendationSourceArn,omitempty"`
	RecommendationSourceType *RecommendationSourceTypeEnum `json:"recommendationSourceType,omitempty"`
}
