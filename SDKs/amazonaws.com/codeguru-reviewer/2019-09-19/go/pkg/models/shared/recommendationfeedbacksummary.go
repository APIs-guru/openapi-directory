package shared

// RecommendationFeedbackSummary
//
//	Information about recommendation feedback summaries.
type RecommendationFeedbackSummary struct {
	Reactions        []ReactionEnum `json:"Reactions,omitempty"`
	RecommendationID *string        `json:"RecommendationId,omitempty"`
	UserID           *string        `json:"UserId,omitempty"`
}
