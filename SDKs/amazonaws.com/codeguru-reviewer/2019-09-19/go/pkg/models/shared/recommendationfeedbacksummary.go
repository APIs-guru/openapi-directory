package shared

type RecommendationFeedbackSummary struct {
	Reactions        []ReactionEnum `json:"Reactions"`
	RecommendationID *string        `json:"RecommendationId"`
	UserID           *string        `json:"UserId"`
}
