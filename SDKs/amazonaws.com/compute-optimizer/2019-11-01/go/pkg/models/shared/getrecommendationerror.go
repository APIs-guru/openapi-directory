package shared



type GetRecommendationError struct {
    Code *string `json:"code,omitempty"`
    Identifier *string `json:"identifier,omitempty"`
    Message *string `json:"message,omitempty"`
    
}

