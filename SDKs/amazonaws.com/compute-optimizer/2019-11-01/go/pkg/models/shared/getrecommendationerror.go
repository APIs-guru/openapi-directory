package shared

type GetRecommendationError struct {
	Code       *string `json:"code"`
	Identifier *string `json:"identifier"`
	Message    *string `json:"message"`
}
