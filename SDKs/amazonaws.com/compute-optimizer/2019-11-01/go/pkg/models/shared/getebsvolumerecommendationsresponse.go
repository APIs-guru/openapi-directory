package shared



type GetEbsVolumeRecommendationsResponse struct {
    Errors []GetRecommendationError `json:"errors,omitempty"`
    NextToken *string `json:"nextToken,omitempty"`
    VolumeRecommendations []VolumeRecommendation `json:"volumeRecommendations,omitempty"`
    
}

