package shared

// Categories
// Provides the category rules that are used to automatically categorize contacts based on uttered keywords and phrases.
type Categories struct {
	MatchedCategories []string                   `json:"MatchedCategories"`
	MatchedDetails    map[string]CategoryDetails `json:"MatchedDetails"`
}
