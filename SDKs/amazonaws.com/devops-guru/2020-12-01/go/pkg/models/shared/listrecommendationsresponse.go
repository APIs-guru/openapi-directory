package shared

type ListRecommendationsResponse struct {
	NextToken       *string          `json:"NextToken,omitempty"`
	Recommendations []Recommendation `json:"Recommendations,omitempty"`
}
