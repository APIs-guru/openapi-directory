package shared

type Categories struct {
	MatchedCategories []string                   `json:"MatchedCategories"`
	MatchedDetails    map[string]CategoryDetails `json:"MatchedDetails"`
}
