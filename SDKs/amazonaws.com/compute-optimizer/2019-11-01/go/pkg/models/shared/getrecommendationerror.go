package shared

// GetRecommendationError
// <p>Describes an error experienced when getting recommendations.</p> <p>For example, an error is returned if you request recommendations for an unsupported Auto Scaling group, or if you request recommendations for an instance of an unsupported instance family.</p>
type GetRecommendationError struct {
	Code       *string `json:"code,omitempty"`
	Identifier *string `json:"identifier,omitempty"`
	Message    *string `json:"message,omitempty"`
}
