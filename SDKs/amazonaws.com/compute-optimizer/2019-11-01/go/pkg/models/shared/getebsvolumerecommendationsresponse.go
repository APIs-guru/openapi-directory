package shared

type GetEbsVolumeRecommendationsResponse struct {
	Errors                []GetRecommendationError `json:"errors"`
	NextToken             *string                  `json:"nextToken"`
	VolumeRecommendations []VolumeRecommendation   `json:"volumeRecommendations"`
}
