package shared

import (
	"time"
)

type RecommendationFeedback struct {
	CodeReviewArn        *string        `json:"CodeReviewArn"`
	CreatedTimeStamp     *time.Time     `json:"CreatedTimeStamp"`
	LastUpdatedTimeStamp *time.Time     `json:"LastUpdatedTimeStamp"`
	Reactions            []ReactionEnum `json:"Reactions"`
	RecommendationID     *string        `json:"RecommendationId"`
	UserID               *string        `json:"UserId"`
}
