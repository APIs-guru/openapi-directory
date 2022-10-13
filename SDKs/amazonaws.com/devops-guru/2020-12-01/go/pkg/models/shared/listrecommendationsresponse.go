package shared

type ListRecommendationsResponse struct {
	NextToken       *string          `json:"NextToken"`
	Recommendations []Recommendation `json:"Recommendations"`
}
