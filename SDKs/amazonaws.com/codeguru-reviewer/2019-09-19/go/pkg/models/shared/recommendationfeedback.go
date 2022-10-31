package shared

import (
"time")

type RecommendationFeedback struct {
    CodeReviewArn *string `json:"CodeReviewArn,omitempty"`
    CreatedTimeStamp *time.Time `json:"CreatedTimeStamp,omitempty"`
    LastUpdatedTimeStamp *time.Time `json:"LastUpdatedTimeStamp,omitempty"`
    Reactions []ReactionEnum `json:"Reactions,omitempty"`
    RecommendationID *string `json:"RecommendationId,omitempty"`
    UserID *string `json:"UserId,omitempty"`
    
}

